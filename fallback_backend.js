// fallback_backend.js
import http from "http";
const port = process.env.PORT ? Number(process.env.PORT) : 8000;
const message = process.env.MESSAGE || "API Gateway not configured properly";

const server = http.createServer((req, res) => {
  // always respond quickly with plain text so gateway health checks see a clear message
  res.writeHead(502, { "Content-Type": "text/plain", "Content-Length": Buffer.byteLength(message) });
  res.end(message);
});

server.listen(port, () => {
  console.log(`Fallback backend listening on http://0.0.0.0:${port}`);
});

FROM node:20-alpine
WORKDIR /app
COPY fallback_backend.js .
EXPOSE 8000
CMD ["node", "fallback_backend.js"]
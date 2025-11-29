FROM node:18-alpine AS base
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --production=false || true
COPY . .
RUN npm run build || true

EXPOSE 3000
CMD ["npm", "run", "dev"]

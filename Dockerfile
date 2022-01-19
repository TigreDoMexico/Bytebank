# Stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/bytebank /usr/share/nginx/html

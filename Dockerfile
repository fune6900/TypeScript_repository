FROM node:24.5.0
COPY package*.json ./
RUN npm install
WORKDIR /app
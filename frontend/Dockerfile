FROM node:alpine as builder
RUN mkdir app
WORKDIR '/app'
COPY package*.json ./app
RUN npm install
COPY . .
RUN npm run build
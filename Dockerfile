FROM node:18-alpine

RUN mkdir /app

WORKDIR /app

COPY . ./

RUN npm install

RUN npm run build

COPY . /app

RUN ls -a
FROM node:latest

ENV HOME=/usr/src/app

RUN mkdir -p $HOME

WORKDIR $HOME

RUN npm install -g pm2
RUN npm install

EXPOSE 3000
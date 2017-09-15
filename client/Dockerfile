FROM node:8.5

ENV HOME=/usr/src/app

RUN mkdir -p $HOME 

WORKDIR $HOME 

COPY package.json $HOME

RUN npm install

EXPOSE 4200
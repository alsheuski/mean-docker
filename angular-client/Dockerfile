FROM node:8.5

ENV HOME=/usr/src/app

RUN mkdir -p $HOME 

WORKDIR $HOME 

COPY package.json $HOME

RUN npm install

COPY . $HOME

EXPOSE 4200
EXPOSE 49153
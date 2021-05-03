FROM node:10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN yarn global add @quasar/cli
RUN yarn install

COPY . /usr/src/app

EXPOSE 8080
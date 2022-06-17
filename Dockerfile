FROM registry.access.redhat.com/ubi8/nodejs-12:latest

ARG APP_PATH=/opt/app-root/

WORKDIR $APP_PATH

COPY package.json package-lock.json ./

RUN npm install

COPY app.js .

EXPOSE 80

COPY docker-entrypoint.sh /
ENTRYPOINT "/docker-entrypoint.sh"
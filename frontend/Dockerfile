FROM node:14.20-alpine

ARG entrypoint=./docker-entrypoint-dev.sh

WORKDIR /app

COPY ${entrypoint} /usr/local/bin/entrypoint

RUN ["chmod", "+x", "/usr/local/bin/entrypoint"]

EXPOSE 3000

ENTRYPOINT /usr/local/bin/entrypoint

TAG ?= latest

docker-build:
	docker build -t simple-nodejs-service:$(TAG) .

run:
	node app.js

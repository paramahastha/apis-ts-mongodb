# Simple RESTful Web APIs with Node.js, Express, MongoDB, Docker and TypeScript

## Requirements

[NodeJS](https://nodejs.org/en/)

Install global TypeScript and TypeScript Node

```
npm install -g typescript ts-node
```


[Docker](https://docs.docker.com/install/) - [Docker Compose](https://docs.docker.com/compose/install/#prerequisites)

Install docker -> docker-compose

## Getting Started

After that, you will have to replace the mongoURL with your MongoDB address in *lib/app.ts*

## Clone this repository

```
git clone git@github.com:paramahastha/restful-api-node-docker-mongodb.git
```

Then install the dependencies

```
npm install
```

## Start the server (npm)

Run in development mode

```
npm run dev
```

Run in production mode 

```
npm run prod
```

## Start the server (docker)

Builds, (re)creates, starts, and attaches to containers for a service

```
docker-compose up
```

Stops containers and removes containers, networks, volumes, and images

```
docker-compose down
```

## Testing over HTTP

The default URL is: *http://localhost:3000*

+ GET all contacts

```
Send GET request to http://localhost:3000/contacts/
```
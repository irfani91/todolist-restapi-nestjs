<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Description

To do list with Rest API with simple functional such as :
- CRUD
- Send Email
- JWT Auth
- Relationanl 
- Prisma Migration
- Simple Unit Testing
- Compodoc
- Swagger
- Docker 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

# run smtp local
$ docker run --rm -p 25:25 -p 8025:80 rnwood/smtp4dev

# run compodoc
npx @compodoc/compodoc -p tsconfig.json -s
```


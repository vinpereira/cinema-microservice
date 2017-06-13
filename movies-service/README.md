# Movies Service using Nodejs

A Movies Services using MongoDB, Nodejs, and Event Emitter

## Programming Language and libraries used to solve the problems

  - Nodejs 8.1.0

Main libraries:
  - express v4.15.3
  - helmet v3.6.1
  - http-status v1.0.1
  - mongodb v2.2.28
  - morgan v1.8.2
  
Dev libraries:
  - eslint v3.19.0
  - mocha v3.3.2
  - should v11.2.1
  - standard v10.0.2
  - supertest v3.0.0

### Running the codes
There are two different ways to run this code:

##### Without Docker
- Start MongoDB and put some data on it (src/mocks/movies.js has some examples)
- Set connection at movies-service/src/config/mongo.js to the right one (Docker is default)
- Install all dependencies
```sh
$ npm install
```

- Run the tests (optional)

```sh
$ npm test
```

- Start the service

```sh
$ npm start
```

- Go to localhost:3000 and access Movies Services API

##### With Docker
- Set connection at movies-service/src/config/mongo.js to the right one (Docker is default)
- Start MongoDB container and put some data on it (src/mocks/movies.js has some examples)
```sh
$ docker run --name my-mongo -p 27017:27017 -d mongo
```
- Build Movies Service as a Docker container (at movies-service root folder -- Dockerfile location)
```sh
$ docker build -t movies-service .
```
- Run Movies Service container
```sh
$ docker run --name movie-service -p 3000:3000 --link my-mongo:my-mongo -d movies-service
```
- Go to localhost:3000 and access Movies Services API
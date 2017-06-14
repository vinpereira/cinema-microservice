const MongoClient = require('mongodb')

const connect = (options, mediator) => {
  mediator.once('boot.ready', () => {
    MongoClient.connect(
      "mongodb://mongo:27017/movies" // with Docker container
      // "mongodb://127.0.0.1:27017/movies" // without Docker container
      , (err, db) => {
        if (err) {
          mediator.emit('db.error', err)
        } 
        else {
          mediator.emit('db.ready', db)
        }
      })
  })
}

module.exports = Object.assign({}, {connect})
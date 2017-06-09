const MongoClient = require('mongodb')

const connect = (options, mediator) => {
  mediator.once('boot.ready', () => {
    MongoClient.connect(
      "mongodb://127.0.0.1:27017/movies"
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
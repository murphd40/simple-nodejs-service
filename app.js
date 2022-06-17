const express = require('express')

const app = express()

const port = process.env.PORT || 80

app.get('/ping', (req, res) => {

  console.log(`ping received`)

  res.send({
    message: 'pong'
  })
})

app.get('/echo/:message', (req, res) => {
  res.send({
    message: req.params.message
  })
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

process.on("SIGINT", () => {
  console.log("SIGINT received")
  shutDown()
})

process.on("SIGTERM", () => {
  console.log("SIGTERM received")
  shutDown()
})

function shutDown() {
  console.log('Received kill signal, shutting down gracefully');
  server.close(() => {
      console.log('Closed out remaining connections');
      process.exit(0);
  });

  setTimeout(() => {
      console.error('Could not close connections in time, forcefully shutting down');
      process.exit(1);
  }, 10000);
}

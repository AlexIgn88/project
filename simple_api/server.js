var path = require('path')
var express = require('express')
var api = require('./api')
var bodyParser = require('body-parser')
var port = 3001

var app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})
app.use(bodyParser.json())
app.use('/api', api)

var serverAddress = process.env.SERVER_ADDRESS || 'localhost';
var serverURL = `http://${serverAddress}:${port}`;

app.listen(port, serverAddress, function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at ' + serverURL)
})
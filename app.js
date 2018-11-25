const createError = require('http-errors');
const bodyParser = require("body-parser");
const express = require('express');
const mainRouter = require('./routes/mainRouter');
const timeRouter = require('./routes/timeRouter');
const placarRouter = require('./routes/placarRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use('/', mainRouter, timeRouter, placarRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

const port = process.env.PORT || 3000;
const end = 'localhost:' + port + '/api';
app.listen(port, () => console.log(`The Web Server is Listening at http://${end}`));
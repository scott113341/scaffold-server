const express = require('express');

const { errorResponse } = require('../util.js');

const app = express();

app.get('/', (req, res) => {
  Promise.resolve()
    .then(() => res.send({ yolo: 'swag' }))
    .catch(errorResponse(res));
});

module.exports = app;

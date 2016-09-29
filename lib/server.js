const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const CONSTANTS = require('./constants.js');
const Api = require('./apps/api.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/', Api);

app.listen(CONSTANTS.PORT, () => console.log(`app started on ${CONSTANTS.PORT}`));

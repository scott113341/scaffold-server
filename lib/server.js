const bodyParser = require('body-parser');
const express = require('express');

const CONSTANTS = require('./constants.js');


const app = express();
app.use(bodyParser.json());


app.listen(CONSTANTS.PORT, () => console.log(`app started on ${CONSTANTS.PORT}`));

const express = require('express');

const CONSTANTS = require('./constants.js');


const app = express();


app.listen(CONSTANTS.PORT, () => console.log(`app started on ${CONSTANTS.PORT}`));

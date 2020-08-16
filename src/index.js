const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const dataResource = require('./routers/data-resource');

const { log, error } = console;

const initialize = async () => {
  try {
    await mongoose.connect('mongodb://mongo:27017/mtrade', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    log('mongo contected');

    const app = express();

    app.use(cors());
    app.use(morgan('combined'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use('/data-resource', dataResource);
    app.listen(4000, () => console.log('Now browse to localhost:4000/data-resource'));
  } catch (e) {
    error('Error:', e.message);
  }
};

initialize();

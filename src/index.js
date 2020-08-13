const mongoose = require('mongoose');
const express = require('express');

const dataResource = require('./routers/data-resource');

const { log, error } = console;

const initialize = async () => {
  try {
    await mongoose.connect('mongodb://mongo:27017/mtrade', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    log('mongo contected');

    const app = express();
    app.use('/data-resource', dataResource);
    app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
  } catch (e) {
    error('Error:', e.message);
  }
};

initialize();

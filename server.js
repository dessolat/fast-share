const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const LOGIN = process.env.LOGIN
const PASS = process.env.PASS
const route = require('./routes/routes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', route);

const start = async () => {
  try {
    mongoose.connect(
      `mongodb+srv://${LOGIN}:${PASS}@cluster0.u1u8p.mongodb.net/fast-share?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};

start();

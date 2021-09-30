const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const route = require('./routes/routes')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', route)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

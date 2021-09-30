const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const code = require('./welcome')

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('code-display', { code });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

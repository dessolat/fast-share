const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const code = 'A code will be here...';
  res.render('code-display', { code });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

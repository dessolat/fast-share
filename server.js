const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const code = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellendus, quae reprehenderit autem quisquam exercitationem corrupti ea pariatur dolorum, unde velit ab facilis. Reprehenderit architecto omnis odit perspiciatis eaque blanditiis.
	Autem excepturi aut minus molestiae corrupti voluptatem et. Corrupti non aliquam, consequuntur nihil dolore quidem eaque blanditiis exercitationem voluptatum asperiores eum saepe natus adipisci a repellat hic officia. Exercitationem, itaque?
	Enim deserunt molestias, minima ullam ea similique, reprehenderit impedit error nemo laudantium ut ducimus saepe voluptatum est sapiente eveniet placeat et ipsa hic iusto a sint quos. Ipsa, id suscipit?
	Quod dignissimos eligendi earum mollitia? Vero magnam possimus suscipit nostrum fugit soluta cum commodi quibusdam minus eveniet, minima reiciendis odio cupiditate rerum porro nihil iste. Laborum modi unde excepturi illum!`;
  res.render('code-display', { code });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

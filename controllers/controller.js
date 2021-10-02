const Document = require('../models/Document');
const welcomeMsg = `	Welcome to the Fast-share!
	
Use the buttons in the top-right corner
to create a new file and share with others.`;

class Controller {
  welcomePage(req, res) {
    res.render('code-display', { code: welcomeMsg });
  }

  newPage(req, res) {
    res.render('new', { value: '' });
  }

  async duplicatePage(req, res) {
    try {
			const id = req.params.id
      const document = await Document.findById(id);
			console.log(id, document.value)
      res.render('new', { value: document.value });
    } catch (error) {
      res.redirect(`/${id}`);
    }
  }

  async getPageId(req, res) {
    try {
			const id = req.params.id
      const document = await Document.findById(id);
      res.render('code-display', { code: document.value, id });
    } catch (error) {
      res.redirect('/');
    }
  }

  async savePage(req, res) {
    const value = req.body.value;
    try {
      const document = await Document.create({ value });
      res.redirect(`/${document.id}`);
    } catch (err) {
      res.render('new', { value });
    }
  }
}

module.exports = new Controller();

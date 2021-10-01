const welcomeMsg = `	Welcome to the Fast-share!
	
Use the buttons in the top-right corner
to create a new file and share with others.`

class Controller {
  async welcomePage(req, res) {
    res.render('code-display', { code: welcomeMsg });
  }

  async newPage(req, res) {
    res.render('new');
  }

  async savePage(req, res) {
		const value = req.body.value
    res.render('code-display', { code: value });
  }
}

module.exports = new Controller();

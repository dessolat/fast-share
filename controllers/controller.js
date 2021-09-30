const code = require('../welcome');

class Controller {
  async welcomePage(req, res) {
    res.render('code-display', { code });
  }

  async newPage(req, res) {
    res.render('new');
  }
}

module.exports = new Controller

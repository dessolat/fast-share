const { Router } = require('express');
const controller = require('../controllers/controller');
const route = new Router();

route.get('/', controller.welcomePage);
route.get('/new', controller.newPage);
route.get('/:id/duplicate', controller.duplicatePage)
route.get('/:id', controller.getPageId)

route.post('/save', controller.savePage);


module.exports = route;

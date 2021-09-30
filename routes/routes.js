const { Router } = require('express');
const controller = require('../controllers/controller')
const route = new Router()

route.get('/', controller.welcomePage);

route.get('/new', controller.newPage);

module.exports = route
var express = require('express');
var router = express.Router();
var homeController = require('../controllers/homeController');

/* GET users listing. */
router.get('/', homeController.getInfo);


module.exports = router;
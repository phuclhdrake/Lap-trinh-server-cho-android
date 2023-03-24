var express = require('express');
var router = express.Router();
var nguoidungcontroller = require('../controllers/nguoidungController');

/* GET users listing. */
router.get('/',nguoidungcontroller.getListUsers);

router.get('/addUsers', nguoidungcontroller.addUsers);
router.post('/addUsers', nguoidungcontroller.addUsers);

module.exports = router;

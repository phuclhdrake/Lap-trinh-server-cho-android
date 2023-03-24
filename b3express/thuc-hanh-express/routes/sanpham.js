var express = require('express');
var router = express.Router();
var sanphamcontroller = require('../controllers/sanphamcontroller');

router.get('/', sanphamcontroller.getList);

router.get('/add', sanphamcontroller.addProduct);
router.post('/add', sanphamcontroller.addProduct);

// can co export
module.exports = router;
let express = require('express');
let router = express.Router();
let {detail,list,category} = require('../controllers/productsController.js');

router.get('/',list);
router.get('/:categoryId?',category);
router.get('/detail/:id/:categoryId',detail);




module.exports = router
let express = require('express');
let router = express.Router();
let {detail,list,category,} = require('../controllers/productsController.js');


router.get('/',list);
router.get('/:category?',category);
router.get('/detail/:id',detail);



module.exports = router
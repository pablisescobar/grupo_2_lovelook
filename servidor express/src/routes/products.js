let express = require('express');
let router = express.Router();
let {detail,list,category,accessories} = require('../controllers/productsController.js');


router.get('/',list);
router.get('/:category?',category);
router.get('/detail/:id',detail);
router.get('/accesorios',accessories);



module.exports = router
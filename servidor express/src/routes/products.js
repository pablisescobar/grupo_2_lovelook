let express = require('express');
let router = express.Router();
let {detail,list} = require('../controllers/productsController.js');


router.get('/',list);
router.get('/detail/:id',detail);


module.exports = router
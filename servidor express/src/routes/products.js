let express = require('express');
let router = express.Router();
let {detail,list,search,} = require('../controllers/productsController.js');


router.get('/',list);
router.get('/detail/:id',detail);



module.exports = router
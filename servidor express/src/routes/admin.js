let express = require('express');
let router = express.Router();
let {listProductAdmin,addProductAdmin,editProduct} = require('../controllers/adminController.js');


router.get('/',listProductAdmin);
router.get('/addProduct',addProductAdmin);
router.get('/editProduct',editProduct)


module.exports = router
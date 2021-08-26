let express = require('express');
let router = express.Router();
let { listProductAdmin,
    addProductAdmin,
    editProduct,
    productStore,
    updateProduct} = require('../controllers/adminController.js');

/* GET - View List Products */
router.get('/products', listProductAdmin);

/* GET - View Add Product  */
router.get('/products/add', addProductAdmin);

/* POST - Creamos un producto con el método realizado en el controlador */
router.post('/products/add', productStore);

/* GET - View Edit Product */
router.get('/products/edit/:id', editProduct)

/* PUT - Editamos un producto con el método realizado en el controlador */
router.put('/products/edit/:id', updateProduct)

module.exports = router
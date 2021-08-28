let express = require('express');
let router = express.Router();
let { listProductAdmin,
    addProductAdmin,
    editProduct,
    productStore,
    updateProduct,
    searchAdmin} = require('../controllers/adminController.js');
let multer = require('../middleware/uploadProductsFiles')

/* GET - View List Products */
router.get('/products', listProductAdmin);

/* GET - View Add Product  */
router.get('/products/add', addProductAdmin);

/* POST - Creamos un producto con el método realizado en el controlador */
router.post('/products/add',multer.single('image'), productStore);

/* GET - View Edit Product */
router.get('/products/edit/:id', editProduct)

/* PUT - Editamos un producto con el método realizado en el controlador */
router.put('/products/edit/:id', updateProduct)

router.get('/products/search',searchAdmin)

module.exports = router
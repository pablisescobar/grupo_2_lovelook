let express = require('express');
let router = express.Router();
let {
    listProductAdmin,
    addProductAdmin,
    editProduct,
    productStore,
    updateProduct,
    searchAdmin,
    eliminarProducto,
    loginAdmin } = require('../controllers/adminController.js');
let multer = require('../middleware/uploadProductsFiles')

/* GET - View login Admin */
router.get('/', loginAdmin)

/* GET - View List Products */
router.get('/products', listProductAdmin);

/* GET - View Add Product  */
router.get('/products/add', addProductAdmin);

/* POST - Creamos un producto con el método realizado en el controlador */
router.post('/products/add', multer.single('image'), productStore);

/* GET - View Edit Product */
router.get('/products/edit/:id', editProduct);

/* PUT - Editamos un producto con el método realizado en el controlador */
router.put('/products/edit/:id', multer.single('image'), updateProduct);

router.get('/products/search', searchAdmin)






/* Delete - borre un producto que coincida con el id de la ruta parametrizada */
router.delete('/products/eliminarProducto/:id', eliminarProducto);

module.exports = router
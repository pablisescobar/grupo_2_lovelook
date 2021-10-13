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
    message,
    deleteMessage } = require('../controllers/adminController.js');
let multer = require('../middleware/uploadProductsFiles')
let productValidator = require('../validations/adminValidation')
let uploadAdminCheck = require('../middleware/uploadAdminCheck')

/* GET - View List Products */
router.get('/products'/* ,uploadAdminCheck */, listProductAdmin);

/* GET - View Add Product  */
router.get('/products/add'/* ,uploadAdminCheck */, addProductAdmin);

/* POST - Creamos un producto con el método realizado en el controlador */
router.post('/products/add'/* ,uploadAdminCheck */, multer.array('image', 4), productValidator, productStore);

/* GET - View Edit Product */
router.get('/products/edit/:id'/* ,uploadAdminCheck */, editProduct);

/* PUT - Editamos un producto con el método realizado en el controlador */
router.put('/products/edit/:id'/* ,uploadAdminCheck */, multer.array('image', 4), productValidator, updateProduct);

/* Bar search */
router.get('/products/search'/* ,uploadAdminCheck */, searchAdmin)

/* Delete - borre un producto que coincida con el id de la ruta parametrizada */
router.delete('/products/eliminarProducto/:id'/* ,uploadAdminCheck */, eliminarProducto);

router.get('/messages'/* ,uploadAdminCheck */, message);
router.delete('/messages/delete/:id'/* ,uploadAdminCheck */, deleteMessage);

module.exports = router
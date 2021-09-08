let {check} = require ('express-validator')


module.exports = [
check('name')
.isEmpty()
.withMessage('Ingrese un nombre para el producto').bail()
.isLength({min:5})
.withMessage('El nombre debe ser mayor a 5 caracteres'),

check('season')
.isEmpty()
.withMessage('Selecciona una temporada'),

check('category')
.isEmpty()
.withMessage('Selecciona una categoria'),

check('price')
.isEmpty()
.withMessage('Ingresa un precio').bail()
.not().isInt()
.withMessage('Ingresa un valor numerico'),

check('color')
.isEmpty()
.withMessage('Selecciona o agrega un color')
.isInt()
.withMessage('Debe agregar caracteres'),

check('size')
.isEmpty()
.withMessage('Selecciona un talle'),

check('stock')
.isEmpty()
.withMessage('Ingresa una cantidad').bail()
.not().isInt()
.withMessage('Ingresa un valor numerico'),


]
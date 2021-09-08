let { check } = require('express-validator')


module.exports = [
    check('name')
        .notEmpty()
        .withMessage('Ingrese un nombre para el producto').bail()
        .isLength({ min: 5 })
        .withMessage('El nombre debe ser mayor a 5 caracteres'),

    check('season')
        .isEmpty()
        .withMessage('Selecciona una temporada'),

    check('category')
        .isEmpty()
        .withMessage('Selecciona una categoria'),

    check('price')
        .notEmpty()
        .withMessage('Ingresa un precio').bail()
        .isNumeric()
        .withMessage('Ingresa un valor numerico'),

    check('color')
        .isEmpty()
        .withMessage('Selecciona o agrega un color').bail(),

    check('size')
        .isEmpty()
        .withMessage('Selecciona un talle'),

    check('stock')
        .notEmpty()
        .withMessage('Ingresa una cantidad').bail()
        .isNumeric()
        .withMessage('Ingresa un valor numerico'),


]
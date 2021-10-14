let { check } = require('express-validator')


module.exports = [
    check('name')
        .notEmpty()
        .withMessage('Ingrese un nombre para el producto').bail()
        .isLength({ min: 5 })
        .withMessage('El nombre debe ser mayor a 5 caracteres'),

    check('season')
        .notEmpty()
        .withMessage('Selecciona una temporada'),

    check('category')
        .notEmpty()
        .withMessage('Selecciona una categoria'),

    check('price')
        .notEmpty()
        .withMessage('Ingresa un precio').bail()
        .isNumeric()
        .withMessage('Ingresa un valor numerico'),

    check('color')
        .notEmpty()
        .withMessage('Selecciona o agrega un color').bail(),

    check('size')
        .notEmpty()
        .withMessage('Selecciona un talle'),

    check('amount')
        .notEmpty()
        .withMessage('Ingresa una cantidad').bail()
        .isNumeric()
        .withMessage('Ingresa un valor numerico')
]
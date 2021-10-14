let { check } = require('express-validator')

module.exports = [
    check('categoryInsert')
        .notEmpty()
        .withMessage('Ingresa un valor').bail()
        .isAlphanumeric()
        .withMessage('Ingresa una cadena de texto'),
]
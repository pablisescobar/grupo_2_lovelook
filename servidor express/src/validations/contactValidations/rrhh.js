let { check, body } = require('express-validator')



module.exports = [
    check('name')
        .notEmpty()
        .withMessage('Ingrese un nombre').bail()
        .isAlpha()
        .withMessage('El nombre no puede contener numeros').bail()
        .isLength({ min: 4 })
        .withMessage('El nombre debe tener mas de 4 caracteres'),

    check('lastName')
        .notEmpty()
        .withMessage('Ingrese un apellido').bail()
        .isAlpha()
        .withMessage('El apellido no puede contener numeros').bail()
        .isLength({ min: 4 })
        .withMessage('El apellido debe tener minimo 4 caracteres'),

    check('phone')
        .notEmpty()
        .withMessage('Ingrese un telefono').bail()
        .isNumeric()
        .withMessage('El valor debe ser numerico'),

    body('cv').custom((value, { req }) => {
        return !/\.(pdf)$/.test(req.files[0].path) || req.files.length == 0 ? false : true
    }).withMessage("Archivo permitido (.pdf)"),

    check('email')
        .notEmpty()
        .withMessage('Debes ingresar un email').bail()
        .isEmail()
        .withMessage('Debes ingresar un email válido'),

    check('msg')
        .notEmpty()
        .withMessage('Este campo no puede estar vacio')
]
let { check } = require('express-validator')



module.exports = [
    check('name')
        .notEmpty()
        .withMessage('Ingrese un nombre').bail()
        .isAlpha()
        .withMessage('El nombre no puede contener numeros').bail()
        .isLength({ min: 4 })
        .withMessage('El nombre debe ser mayor a 4 caracteres'),

    check('lastName')
        .notEmpty()
        .withMessage('Ingrese un apellido').bail()
        .isAlpha()
        .withMessage('El apellido no puede contener numeros').bail()
        .isLength({ min: 4 })
        .withMessage('El apellido debe tener minimo 4 caracteres'),

    check('dni')
        .notEmpty()
        .withMessage('Ingrese un dni')
        .isLength({ min: 7, max: 8 })
        .withMessage('El valor ingresado no es un dni'),

    check('phone')
        .isNumeric()
        .withMessage('El valor debe ser numerico'),

    check('email')
        .notEmpty()
        .withMessage('Debes ingresar un email').bail()
        .isEmail()
        .withMessage('Debes ingresar un email válido'),

    check('location')
        .notEmpty()
        .withMessage('Seleccione una localidad'),

    check('address')
        .notEmpty()
        .withMessage('Ingrese una dirección y su altura').bail()
        .isLength({ min: 5 })
        .withMessage('Debe ingresar mas de 5 caracteres'),

    check('city')
        .notEmpty()
        .withMessage('Ingrese una ciudad').bail(),

    check('cuit')
        .notEmpty()
        .withMessage('Ingrese un cuit valido').bail()
        .isNumeric()
        .withMessage('Ingresa un valor numerico'),

    check('businessName')
        .notEmpty()
        .withMessage('Ingresa una razon social').bail()
        .isAlpha()
        .withMessage('El valor no puedo contener numeros'),

    check('socialAddress')
        .notEmpty()
        .withMessage('Ingrese una dirección social').bail(),

    check('msg')
        .notEmpty()
        .withMessage('Este campo no puede estar vacio'),
]
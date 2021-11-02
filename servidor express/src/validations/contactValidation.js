let { check } = require('express-validator')


module.exports = [
    check('name')
        .notEmpty()
        .withMessage('Ingrese un nombre').bail()
        .isLength({ min: 4 })
        .withMessage('El nombre debe ser mayor a 4 caracteres'),

    check('lastName')
        .notEmpty()
        .withMessage('Ingrese un apellido')
        .isLength({ min: 4 })
        .withMessage('El apellido debe ser mayor a 4 caracteres'),

    check('dni')
        .notEmpty()
        .withMessage('Ingrese un dni')
        .isNumeric()
        .isLength({ min: 7, max: 8 })
        .withMessage('El valor no es un dni'), ,

    check('phone')
        .isNumeric()
        .withMessage('El valor debe ser numerico'),

    check('cv')
        .notEmpty()
        .withMessage('Seleccione un archivo'),

    check('location')
        .notEmpty()
        .withMessage('Seleccione una localidad'),

    check('address')
        .notEmpty()
        .withMessage('Ingrese una dirección y su altura').bail()
        .isAlphanumeric()
        .withMessage('La dirección debe contener la calle y la altura'),

    check('city')
        .notEmpty()
        .withMessage('Ingrese una ciudad').bail()
        .isAlpha()
        .withMessage('El valor no puedo contener numeros'),

    check('cuit')
        .notEmpty()
        .withMessage('Ingrese un cuit valido').bail()
      /*   .matches(/^\d{2}\-\d{8}\-\d{1}$/)
        .withMessage("El valor ingresado no es un cuit").bail() */
        .isNumeric()
        .withMessage('Ingresa un valor numerico'),

    check('businessNames')
        .notEmpty()
        .withMessage('Ingresa una razon social').bail()
        .isAlpha()
        .withMessage('El valor no puedo contener numeros'),

    check('socialAddresss')
        .notEmpty()
        .withMessage('Ingrese una dirección social').bail()
        .isAlphanumeric()
        .withMessage('La dirección debe contener la calle y la altura'),

    check('msg')
        .notEmpty()
        .withMessage('Este campo no puede estar vacio'),
]
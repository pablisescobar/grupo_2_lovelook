const { check, body } = require('express-validator')
const { users } = require('../data/users.json')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debes escribir un nombre'),

    check('last_name')
    .notEmpty()
    .withMessage('Debes escribir un apellido'),

    check('email')
    .notEmpty()
    .withMessage('Debes escribir un email').bail()
    .isEmail()
    .withMessage('Debes escribir un email valido'),

    body('email')
    .custom(value => {
        let user = users.fin(user => user.email === value)

        if(user === undefined){
            return true
        }else {
            return false
        }
    })
    .withMessage('Email ya registrado'),

    check('pass1')
    .notEmpty()
    .withMessage('Debes escribir una contraseña')
    .isLength({
        min:6,
        max:10
    })
    .withMessage('La contraseña debe contener un minimo de 6 y maximo de 10 caracteres'),
    
    body('pass2')
    .custom((value, {req}) => value !== req.body.pass1 ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('condiciones')
    .isString('on')
    .withMessage('Debes aceptar los terminos y condiciones')
]
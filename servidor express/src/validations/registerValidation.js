const { check, body } = require('express-validator')
const db = require('../database/models')

module.exports = [
    check('firstName')
    .notEmpty()
    .withMessage('Debes escribir un nombre'),

    check('lastName')
    .notEmpty()
    .withMessage('Debes escribir un apellido'),

    check('email')
    .notEmpty()
    .withMessage('Debes escribir un email').bail('Este campo no puede estar vacio')
    .isEmail()
    .withMessage('Debes escribir un email valido'),

    body('email')
        .custom( value => {
            return db.User.findOne({
                where:{
                    email : value
                }
                })
                .then(user => {
                    if(user){
                        return Promise.reject('Este mail ya está registrado')
                    }
                })
    }),
    
   /*  check('email')
    .notEmpty()
    .withMessage('Debes escribir un email').bail('Este campo no puede estar vacio')
    .isEmail()
    .withMessage('Debes escribir un email valido'), */

    /* body('email')
    .custom(value => {
        return db.User.findOne({
            where: {
                email: value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject("El email ya esta registrado")
            }
        })
        
        
    }), */
/* let user = getUsers.find(user => user.email === value) */
        /* if(user === undefined){
            return true
        }else {
            return false
        } */
    check('password')
    .notEmpty()
    .withMessage('Debes escribir una contraseña')
    .isLength({
        min:6,
        max:10
    })
    .withMessage('La contraseña debe contener un minimo de 6 y maximo de 10 caracteres'),
    
    body('pass2')
    .custom((value, {req}) => value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('condiciones')
    .isString('on')
    .withMessage('Debes aceptar los terminos y condiciones')
]
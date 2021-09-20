const { check, body } = require('express-validator');
const { getUsers } = require('../data/dataBase');
const bcrypt = require('bcryptjs')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes ingresar un email').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('email')
    .custom(value => {
        let user = getUsers.find(user => user.email === value)

        if(user !== undefined) {
            return true
        } else {
            return false
        }
    })
    .withMessage("Email no registrado"),

    check('pass1')
    .notEmpty()
    .withMessage('Debes ingresar tu contraseña'),

    body('pass1')
    .custom((value, {req}) => {
        let user = getUsers.find(user => user.email === req.body.email)
        return bcrypt.compareSync(value, user.pass1)

    })
    .withMessage('contraseña inválida')
]
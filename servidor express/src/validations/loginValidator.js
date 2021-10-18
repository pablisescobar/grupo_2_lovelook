const db = require('../database/models')
const { check, body } = require('express-validator');
const bcrypt = require('bcryptjs')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes ingresar un email').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body ('custom')
        .custom((value, {req}) => {
            return db.User.findOne({
                where: {
                    email:req.body.email
                }
            })
            .then(user => {
                if(!bcrypt.compareSync(req.body.password, user.password)){
                    return Promise.reject()
                }
            })
            .catch(error => {
                return Promise.reject("Email o contraseña incorrecta")
            })
        })
]
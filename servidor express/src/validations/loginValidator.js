const db = require('../database/models')
const { check, body } = require('express-validator');
const bcrypt = require('bcryptjs')
/* const { getUsers } = require('../data/dataBase'); */

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
                if(!bcrypt.compareSync(req.body.password, user.datavalues.password)){
                    return Promise.reject()
                }
            })
            .catch(error => {
                return Promise.reject("Email o contraseña incorrecta")
            })
        })


   /*  body('email')
    .custom(value => {
        let user = getUsers.find(user => user.email === value)
        
        if(user !== undefined) {
            return true
        } else {
            return false
        }
    })
    .withMessage("Email no registrado"), */

    /* check('pass1')
    .notEmpty()
    .withMessage('Debes ingresar tu contraseña'),

    body('pass1')
    .custom((value, {req}) => {
        let user = getUsers.find(user => user.email === req.body.email)
        return bcrypt.compareSync(value, user.pass1)

    })
    .withMessage('contraseña inválida') */
]
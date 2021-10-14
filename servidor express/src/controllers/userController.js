const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models')


module.exports = {
    register: (req, res) => {
        res.render('users/register', {
            position: "position:relative;",
            session: req.session
        })
    },

    login: (req, res) => {
        res.render('users/login', {
            position: "position:relative;",
            session: req.session
        })
    },

    perfil: (req, res) => {
        db.User.findByPk(req.session.user.id, {
            include: [{ association: "location" }]
        }).then((user) => {
            res.render('users/perfilUser', {
                position: "position:relative;",
                user,
                session: req.session
            })
        })

        /* let user = getUsers.find(user => user.id === req.session.user.id) */

    },

    profileEdit: (req, res) => {
        db.User.findByPk(req.session.user.id, {
            include: [{ association: "location" }]
        }).then((user) => {
            res.render('users/userProfileEdit', {
                position: "position:relative;",
                user,
                session: req.session
            })
        })
        /* let user = getUsers.find(user => user.id === +req.params.id) */
    },

    updateProfile: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let { firstname, lastName, phone, address, pc, province, city } = req.body;
            db.User.update({
                firstname,
                lastName,
                phone,
                avatar: req.file ? req.file.filename : req.session.user.avatar
            }, {
                where: {
                    id: req.params.id
                }
            })
                .then(() => {
                    db.Location.create({
                        address,
                        city,
                        province,
                        cp,
                        userId: req.params.id
                    })
                        .then(() => {
                            res.redirect('/user/perfil')
                        })
                })

        } else {
            res.render('users/userProfileEdit', {
                position: "position:relative;",
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
        /*  let user = getUsers.find(user => user.id === +req.params.id)
 
         let {
             name,
             last_name,
             tel,
             address,
             pc,
             province,
             city
         } = req.body
 
         user.name = name
         user.last_name = last_name
         user.tel = tel
         user.address = address
         user.pc = pc
         user.province = province
         user.city = city
         user.avatar = req.file ? req.file.filename : user.avatar
 
         writeUsersJSON(getUsers)
 
         delete user.pass
 
         req.session.user = user
 
         res.redirect('/user/perfil') */


    },

    processLogin: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(user => {
                    req.session.user = {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        rolId: user.rolId
                    };
                    if (req.body.remember) {
                        res.cookie("userLoveLook", req.session.user, { expires: new Date(Date.now() + 90000), httpOnly: true })
                    };
                    res.locals.user = req.session.user

                    res.redirect('/')
                })
        } else {
            res.render('users/login', {
                position: "position: relative;",
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
        /*  let user = getUsers.find(user => user.email === req.body.email)

         req.session.user = {
             id: user.id,
             name: user.name,
             last_name: user.last_name,
             email: user.email,
             avatar: user.avatar,
             rol: user.rol
         }

         if (req.body.remember) {
             res.cookie("userLoveLook", req.session.user, { expires: new Date(Date.now() + 90000), httpOnly: true })
         }

         res.locals.user = req.session.user

         res.redirect('/') */
    },
    processRegister: (req, res) => {
        let errors = validationResult(req)
       /*  if (req.fileValidatorError) {
            let image = {
                param: "image",
                msg: req.fileValidatorError,
            };
            errors.push(image);
        } */

        if (errors.isEmpty()) {

            let { firstName, lastName, email, password } = req.body
            /* res.send(req.body) */
            db.User.create({
                firstName,
                lastName,
                email,
                password: bcrypt.hashSync(password, 12),
                rolId: 1,
            }).then(() => {
                res.redirect('/user/login')
            }).catch(err => console.log(err))
        } else {
            res.render('users/register', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session,
                position: "position: relative"
            });
        }

        /*    let lastId = 0
       getUsers.forEach(user => {
           lastId = user.id
       }) 
       
       
           let {
               name, 
               last_name,
               email, 
               pass1
           } = req.body

           let newUser = {
               id : lastId + 1,
               name,
               last_name,
               email,
               pass1 : bcrypt.hashSync(pass1, 12),
               avatar : req.file ? req.file.filename : "default-image.png",
               rol: "ROL_USER",
               tel: "",
               address: "",
               pc: "",
               province: "",
               city:""
           }

           getUsers.push(newUser)

           writeUsersJSON(getUsers)

           res.redirect('/user/login') */
    },

    logout: (req, res) => {
        req.session.destroy();
        if (req.cookies.userLoveLook) {
            res.cookie('userLoveLook', '', { maxAge: -1 })
        }

        res.redirect('/')
    },

    cart: (req, res) => {
        let productsOffer = getProducts.filter(product => product.discount > 15 ? product : null)
        res.render('users/productCart', {
            products: productsOffer,
            position: "",
            toThousand,
            categorias,
            session: req.session
        })
    }
}
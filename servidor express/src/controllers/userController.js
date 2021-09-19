const { validationResult } = require("express-validator");
const { getProducts, writeProductsJSON, getUsers, writeUsersJSON } = require("../data/dataBase");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const bcrypt = require('bcrypt');


let categorias = [];
getProducts.forEach(product => {
    if (!categorias.includes(product.category)) {
        categorias.push(product.category)
    }
})

module.exports = {
    register: (req, res) => {
        res.render('users/register', {
            position: "position:relative;",
            categorias
        })
    },

    login: (req, res) => {
        res.render('users/login', {
            position: "position:relative",
            categorias,
            session: req.session
        })
    },

    perfil: (req, res) => {
        let user = getUsers.find(user.id === req.session.user.id)

        res.render('users/perfilUser', {
            position: "",
            categorias,
            user,
            session: req.session
        })
    },

    profileEdit: (req, res) => {
        let user = getUsers.find(user => user.id === +req.params.id)

        res.render('userProfileEdit', {
            position:"",
            categorias,
            user,
            session: req.session
        })
    },

    updateProfile: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let user = getUsers.find(user => user.id === +req.params.id)

            let {
                name,
                last_name,
                tel,
                adress,
                pc,
                province,
                city
            } = req.body

            user.name = name
            user.last_name = last_name
            user.tel = tel
            user.adress = adress
            user.pc = pc
            user.province = province
            user.city = city

            writeUsersJSON(getUsers)

            delete user.pass

            req.session.user = user

            res.redirect('/user/perfil')

        } else {
            res.render('userProfileEdit', {
                position: "",
                categorias,
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }

    },

    processLogin: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let user = getUsers.find(user => user.email === req.body.email)

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

            res.redirect('/')
        } else {
            res.render('users/login', {
                categorias,
                position:"position: relative",
                errors: errors.mapped(),
                session: req.session
            })
        }
    },
    processRegister: (req, res) => {
        let errors = validationResult(req)
        console.log(errors)
        
        if (errors.isEmpty()) {
            let lastId = 0
        getUsers.forEach(user => {
            console.log(getUsers)
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

            res.redirect('/user/login')
        }else{
            res.render('users/register', { dataBase: getUsers, errors: errors.mapped(), old: req.body, categorias,
                position:"position: relative" });

        }
        
        

     
    },

    logout: (req, res) => {
        req.session.destroy()
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
            categorias
        })
    }
}
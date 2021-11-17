const db = require('../database/models');
const Op = require('sequelize')
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {
  register: (req, res) => {
    res.render('users/register', {
      position: 'position:relative;',
      session: req.session,
    })
  },

  login: (req, res) => {
    res.render('users/login', {
      position: 'position:relative;',
      session: req.session,
    })
  },

  perfil: (req, res) => {
    db.User.findByPk(req.session.user.id, {
      include: [{ association: 'location' }],
    })
      .then((user) => {
        res.render('users/perfilUser', {
          position: 'position:relative;',
          user,
          session: req.session,
        })
      })
      .catch((err) => console.log(err))
  },

  profileEdit: (req, res) => {
    db.User.findByPk(req.session.user.id, {
      include: [{ association: 'location' }],
    }).then((user) => {
      res.render('users/userProfileEdit', {
        position: 'position:relative;',
        user,
        session: req.session,
      })
    })
  },

  updateProfile: (req, res) => {
    let errors = validationResult(req)

    if (errors.isEmpty()) {
      let { firstName, lastName, phone, address, pc, province, city } = req.body
      db.User.update(
        {
          firstName,
          lastName,
          phone,
          avatar: req.file ? req.file.filename : req.session.user.avatar,
        },
        {
          where: {
            id: req.params.id,
          },
        },
      ).then(() => {
        db.Location.create({
          address,
          city,
          province,
          pc,
          userId: req.params.id,
        }).then((location) => {
          db.User.update({
            locationId: location.id,
          },
          {
              where: {
                  id : req.params.id
              }
          }).then(() => {
            res.redirect('/user/perfil')
          })
        })
      })
    } else {
      res.render('users/userProfileEdit', {
        position: 'position:relative;',
        errors: errors.mapped(),
        old: req.body,
        session: req.session,
      })
    }
  },
  deleteProfile: (req, res) => {
    db.User.findOne({
        where: {
            id: req.params.id,
          },
    }).then((user)=> {
        db.Location.destroy({
            where: {
                id: user.locationId,
              },
        })
        /* db.Sales.destroy({
            where:{
                id:req.params.id
            }, 
        })
        db.ShoppingCart.destroy({
            where:{
                id: req.params.id
            }
        }) */
        db.User.destroy({
          where: {
            id: req.params.id,
          },
        }).then(() => {
          req.session.destroy()
          if (req.cookies.userLoveLook) {
            res.cookie('userLoveLook', '', { maxAge: -1 })
          }
          res.redirect('/')
        })
 })
  },

  processLogin: (req, res) => {
    let errors = validationResult(req)

    if (errors.isEmpty()) {
      db.User.findOne({
        where: {
          email: req.body.email,
        },
      }).then((user) => {
        req.session.user = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          rol: user.rolId,
        }
        if (req.body.remember) {
          res.cookie('userLoveLook', req.session.user, {
            expires: new Date(Date.now() + 90000),
            httpOnly: true,
          })
        }
        res.locals.user = req.session.user

        res.redirect('/')
    })
  }
}
  ,
     cart: (req, res) => {
        db.Product.findAll({
            where: {
              discount: {
                [Op.gte]: 20,
              },
            },
            limit:3,
            include: [
              { association: "category" },
              { association: "images" },
              { association: "colors" },
              { association: "season" },
              { association: "sizes" },
            ],
          })
          .then(products=>{
              res.render('users/productCart', {
                  products,
                  position: "",
                  toThousand,
                  session: req.session
          })
        })
    }
}

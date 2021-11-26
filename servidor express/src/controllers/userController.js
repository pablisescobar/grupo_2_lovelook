const db = require("../database/models");
const Op = require("sequelize");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let passport = require("passport");
let FacebookStrategy = require("passport-facebook").Strategy;

module.exports = {
  register: (req, res) => {
    res.render("users/register", {
      position: "position:relative;",
      session: req.session,
    });
  },
  login: (req, res) => {
    res.render("users/login", {
      position: "position:relative;",
      session: req.session,
    });
  },
  perfil: (req, res) => {
 console.log(req.session.passport.user[0].social_provider == "facebook")
    db.User.findOne({
     where:{
       id_social:req.session.user.id_social
     } 
    }, {
      include: [{ association: "location" }],
    })
      .then((user) => {
        console.log("usuario en sesion ----");
       console.log(user);
       console.log("---------------");
        res.render("users/perfilUser", {
          position: "position:relative;",
          user,
          session: req.session,
        });
      })
      .catch((err) => console.log(err));
  },
  profileEdit: (req, res) => {
    db.User.findByPk(req.session.user.id, {
      include: [{ association: "location" }],
    }).then((user) => {
      res.render("users/userProfileEdit", {
        position: "position:relative;",
        user,
        session: req.session,
      });
    });
  },
  updateProfile: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let { firstName, lastName, phone, address, pc, province, city } =
        req.body;
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
        }
      ).then(() => {
        db.Location.create({
          address,
          city,
          province,
          pc,
          userId: req.params.id,
        }).then(() => {
          res.redirect("/user/perfil");
        });
      });
    } else {
      res.render("users/userProfileEdit", {
        position: "position:relative;",
        errors: errors.mapped(),
        old: req.body,
        session: req.session,
      });
    }
  },
  deleteProfile: (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => {
      db.Location.destroy({
        where: {
          userId: req.params.id,
        },
      }).then(() => {
        req.session.destroy();
        if (req.cookies.userLoveLook) {
          res.cookie("userLoveLook", "", { maxAge: -1 });
        }
        res.redirect("/");
      });
    });
  },
  processLogin: (req, res) => {
    let errors = validationResult(req);

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
          id_social: 0,
          avatar: "default-image.png",
          social_provider:'local'
        };
        
        res.locals.user = req.session.user;

        res.redirect("/");
      });
    } else {
      res.render("users/login", {
        position: "position: relative;",
        errors: errors.mapped(),
        old: req.body,
        session: req.session,
      });
    }
  },
  processRegister: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let { firstName, lastName, email, password } = req.body;
      db.User.create({
        firstName,
        lastName,
        email,
        password: bcrypt.hashSync(password, 12),
        rolId: 1,
        avatar: "default-image.png",
        social_provider:"local",
        id_social: 0,
        
      })
        .then(() => {
          res.redirect("/user/login");
        })
        .catch((err) => console.log(err));
    } else {
      res.render("users/register", {
        errors: errors.mapped(),
        old: req.body,
        session: req.session,
        position: "position: relative",
      });
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    if (req.cookies.userLoveLook) {
      res.cookie("userLoveLook", "", { maxAge: -1 });
    }
    res.redirect("/");
  },
  cart: (req, res) => {
    db.Product.findAll({
      where: {
        discount: {
          [Op.gte]: 20,
        },
      },
      limit: 8,
      include: [
        { association: "category" },
        { association: "images" },
        { association: "colors" },
        { association: "season" },
        { association: "sizes" },
      ],
    }).then((products) => {
      res.render("users/productCart", {
        products,
        position: "",
        toThousand,
        session: req.session,
      });
    });
  },
  loginGoogle: (req, res) => {

    req.session.user = {
      id: req.session.passport.user.id,
      firstName: req.session.passport.user.firstName,
      lastName: req.session.passport.user.lastName,
      email: req.session.passport.user.email,
      id_social: req.session.passport.user.id_social,
      rol:1,
      social_provider:req.session.passport.user.social_provider,
      avatar:req.session.passport.user.avatar,
    } 
    res.redirect("/");
  },
  loginFacebook: (req, res) => {

    passport.use(
      new FacebookStrategy(
        {
          clientID: "1335634096866488",
          clientSecret: "deea24124bf82a27bdfc6e042eeec128",
          callbackURL: "http://localhost:3000/user/auth/facebook/callback",
        },
        function (accessToken, refreshToken, profile, done) {
          
  
          db.User.findOne(
            /* Buscamos un usuario de facebook atravez de una id que nos devuelve el profile.id */
            {
              where: {
                id_social: profile.id,
              },
            },
            {
              include: [{ association: "location" }],
            }
          ).then((user) => {
            /* obtenemos la respuesta */

            if (!user) { /* si el usuario no existe */
              console.log("creando"); 
  
              db.User.create({   /* creame un usuario */
                firstName: profile.displayName,
                lastName: profile.displayName,
                email: "invitado@facebook.com",
                password: null,
                phone: null,
                rolId: 1,
                id_social: profile.id,
                social_provider: profile.provider,
                avatar: "default-image.png",
              })
                .then((user) => { /* una vez creado necesito el id del usuario creado para colocarlo en el userId */
                  db.Location.create({
                    province: null,
                    city: null,
                    pc: null,
                    address: null,
                    userId: user.id,
                  });
                  return done(null, user);  /* luego realizamos la autenticacion con passport done */
                })
                .catch((error) => {
                  console.log(error);
                });
            }else{  /* si el usuario existe solo vamos a actualizar los datos */
              console.log("editando");
              db.User.update({
                firstName: profile.displayName,
                lastName: profile.displayName,
                email: "invitado@facebook.com",
                password: null,
                phone: null,
                rolId: 1,
                id_social: profile.id,
                social_provider: profile.provider,
                avatar: "default-image.png",
              },{
                where: {
                  id_social: profile.id,
                },
              },)
              .then(user=>{

               
                  req.session.user = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    id_social: user.id_social,
                    rol:user.rolId,
                    social_provider:user.social_provider,
                    avatar:user.avatar,
                  } 
                console.log(req.session.user);

                return done(null, user); /* luego realizamos la autenticacion con passport done */
              })
            }
          })
        }
      )
    );



/* 
    req.session.user = {
      id: req.session.passport.user.id,
      firstName: req.session.passport.user.firstName,
      lastName: req.session.passport.user.lastName,
      email: req.session.passport.user.email,
      id_social: req.session.passport.user.id_social,
      rol:1,
      social_provider:req.session.passport.user.social_provider,
      avatar:req.session.passport.user.avatar,
    } 
    res.redirect("/"); */
  },
};

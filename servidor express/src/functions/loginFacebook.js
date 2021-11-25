let passport = require("passport");
let FacebookStrategy = require("passport-facebook").Strategy;
let db = require("../database/models");

module.exports = () => {
passport.use(
  new FacebookStrategy(
    {
      clientID: "1335634096866488",
      clientSecret: "deea24124bf82a27bdfc6e042eeec128",
      callbackURL: "http://localhost:3000/user/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
       db.User.findOne({
        where: {
          firstName: profile.displayName,
        },
      }).then((user) => { 
        
       
         if (!user) {
          console.log("creando"); 
        

          db.User.create({
            firstName:profile.displayName,
            lastName: profile.displayName,
            email: "invitado@facebook.com",
            password: null,
            phone: null,
            rolId: 1,
            id_social: profile.id,
            social_provider: "facebook",
            avatar: "default-image.png",
          })
            .then((user) => {
              db.Location.create({
                province: null,
                city: null,
                pc: null,
                address: null,
                userId: user.id,
              });
              return done(null, user);
            })
            .catch((error) => {
              console.log(error);
            });
          // Si ya existe
        } else {
          console.log("actualizando");
          db.User.update(
            {
                firstName: profile.displayName,
                lastName: profile.displayName,
                email: "invitado@facebook.com",
                password: null,
                phone: null,
                rolId: 1,
                id_social: profile.id,
                social_provider: "facebook",
                avatar: "default-image.png",
            },
            {
              where: {
                id_social: profile.id,
              },
            }
          )
            .then((user) => {
              return done(null, user);
            })
            .catch((error) => {
              console.log(error);
            });
        } 
      });
    }
  )
);
}

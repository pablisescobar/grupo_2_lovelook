const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const db = require("../database/models");

module.exports = () => {
  return passport.use(
    new GoogleStrategy(
      {
        clientID:
          "48088220320-7pus4n0iut0meubgav3vlglo3k5b2gmr.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:3000/user/auth/google/callback",
      },

      async function (accessToken, refreshToken, profile, done) {
        // Busco si hay un usuario logeado con google con el id enviado por parametro
        const user = await db.User.findOne({
          where: {
            id_social: profile.id,
          },
        });
        // En caso de que no lo haya crea el usuario guardando los datos del profile en la bd
        if (!user) {

            console.log(profile);
          db.User.create({
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            password: null,
            phone: null,
            rolId: 1,
            id_social: profile.id,
            social_provider: "google",
            avatar: profile.photos[0].value,
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
          db.User.findOne({
            where: {
              id_social: profile.id,
            },
          })
            .then((user) => {
              return done(null, user);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    )
  );
};

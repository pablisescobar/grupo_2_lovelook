let express = require("express");
let router = express.Router();
let {
  profile,
  cart,
  login,
  register,
  processLogin,
  logout,
  profileEdit,
  updateProfile,
  processRegister,
  deleteProfile,
  loginGoogle,
  loginFacebook
} = require("../controllers/userController.js");
const loginValidator = require("../validations/loginValidator");
const userLog = require("../middleware/userLog");
const registerValidation = require("../validations/registerValidation");
const uploadUserAvatar = require("../middleware/uploadUserAvatar");
const userSessionCheck = require("../middleware/userSessionCheck");

/* google sing in */
const passport = require('passport');

/* Facebook SDK */

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

/* Google API SING IN*/
const googleLogin = require('../functions/loginGoogle');
googleLogin()


/* Facebook API SING IN*/
const facebookLogin = require('../functions/loginFacebook');
facebookLogin()

/* View login */
router.get("/login", userLog, login);
router.post("/login", loginValidator, processLogin);
router.get("/logout", logout);

/* View register */
router.get("/register", userLog, register);
router.post("/register", userLog, registerValidation, processRegister);

/* View perfil user */
router.get("/perfil", userSessionCheck, profile);
router.get("/profile/edit/:id", userSessionCheck, profileEdit);
router.put(
  "/profile/edit/:id",
  uploadUserAvatar.single("avatar"),
  updateProfile
);
router.delete(
  "/perfil/delete/:id",
  uploadUserAvatar.single("avatar"),
  deleteProfile
);

/* View cart shopping  */
router.get("/cart", userSessionCheck, cart);

/* Google Sing In */
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/user/login' }), loginGoogle);

/* Facebook Sing In */
router.get("/auth/facebook", passport.authenticate("facebook", { scope: ['email', 'user_friends'] }));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/user/login' }), loginFacebook);



module.exports = router;

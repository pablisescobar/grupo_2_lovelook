let express = require("express");
let router = express.Router();
let {
  perfil,
  cart,
  login,
  register,
  processLogin,
  logout,
  profileEdit,
  updateProfile,
  processRegister,
  deleteProfile,
  loginGoogle
} = require("../controllers/userController.js");
const loginValidator = require("../validations/loginValidator");
const userLog = require("../middleware/userLog");
const registerValidation = require("../validations/registerValidation");
const uploadUserAvatar = require("../middleware/uploadUserAvatar");
const userSessionCheck = require("../middleware/userSessionCheck");

/* google sing in */
const passport = require('passport');

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

const googleLogin = require('../functions/loginGoogle');
googleLogin()

/* View login */
router.get("/login", userLog, login);
router.post("/login", loginValidator, processLogin);
router.get("/logout", logout);

/* View register */
router.get("/register", userLog, register);
router.post("/register", userLog, registerValidation, processRegister);

/* View perfil user */
router.get("/perfil", userSessionCheck, perfil);
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

module.exports = router;

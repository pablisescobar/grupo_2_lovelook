let express = require('express');
let router = express.Router();
let {perfil,
     cart,
     login,
     register, 
     processLogin,
     logout,
     profileEdit,
     updateProfile } = require('../controllers/userController.js');
const loginValidator = require('../validations/loginValidator');
const userLog = require('../middleware/userLog');

/* View login */
router.get('/login', userLog, login);
router.post('/login', loginValidator, processLogin);
router.get('/logout', logout);

/* View register */
router.get('/register',register)

/* View perfil user */
router.get('/perfil', perfil);
router.get('/profile/edit/:id', profileEdit)
router.put('/profile/edit/:id', updateProfile)

/* View cart shopping */
router.get('/cart', cart);

module.exports = router
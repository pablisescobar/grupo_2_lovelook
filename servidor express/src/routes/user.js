let express = require('express');
let router = express.Router();
let {perfil,
     cart,
     login,
     register, 
     processLogin,
     logout,
     profileEdit,
     updateProfile, 
     processRegister } = require('../controllers/userController.js');
const loginValidator = require('../validations/loginValidator');
const userLog = require('../middleware/userLog');
const registerValidation = require('../validations/registerValidation.js');
const uploadUserAvatar = require('../middleware/uploadUserAvatar')

/* View login */
router.get('/login', userLog, login);
router.post('/login', loginValidator, processLogin);
router.get('/logout', logout);

/* View register */
router.get('/register',register);
router.post('/register',registerValidation, processRegister)

/* View perfil user */
router.get('/perfil', perfil);
router.get('/profile/edit/:id', profileEdit)
router.put('/profile/edit/:id',uploadUserAvatar.single('avatar') ,updateProfile)

/* View cart shopping */
router.get('/cart', cart);

module.exports = router
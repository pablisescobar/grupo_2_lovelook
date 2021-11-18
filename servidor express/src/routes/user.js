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
     processRegister, 
     deleteProfile} = require('../controllers/userController.js');
const loginValidator = require('../validations/loginValidator');
const userLog = require('../middleware/userLog');
const registerValidation = require('../validations/registerValidation');
const uploadUserAvatar = require('../middleware/uploadUserAvatar');
const userSessionCheck = require('../middleware/userSessionCheck')

/* View login */
router.get('/login', userLog, login);
router.post('/login', loginValidator, processLogin);
router.get('/logout', logout);

/* View register */
router.get('/register',userLog,register);
router.post('/register',userLog,registerValidation, processRegister)

/* View perfil user */
router.get('/perfil', userSessionCheck, perfil);
router.get('/profile/edit/:id', userSessionCheck, profileEdit)
router.put('/profile/edit/:id',uploadUserAvatar.single('avatar') ,updateProfile)
router.delete('/perfil/delete/:id',uploadUserAvatar.single('avatar'),deleteProfile)

 /* View cart shopping  */
router.get('/cart',userSessionCheck, cart); 

module.exports = router
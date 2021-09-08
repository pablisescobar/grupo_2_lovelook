let express = require('express');
let router = express.Router();
let {perfil, cart,login,register } = require('../controllers/userController.js');

/* View login */
router.get('/login',login)
/* View register */
router.get('/register',register)

/* View perfil user */
router.get('/perfil', perfil);

/* View cart shopping */
router.get('/cart', cart);

module.exports = router
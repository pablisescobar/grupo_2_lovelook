let express = require('express');
let router = express.Router();
let { login, register, perfil, cart, favorites } = require('../controllers/userController.js');


router.get('/login', login);
router.get('/register', register);
router.get('/perfil', perfil);
router.get('/cart', cart);

module.exports = router
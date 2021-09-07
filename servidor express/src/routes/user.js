let express = require('express');
let router = express.Router();
let {perfil, cart } = require('../controllers/userController.js');



router.get('/perfil', perfil);
router.get('/cart', cart);

module.exports = router
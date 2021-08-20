let express = require('express');
let router = express.Router();
let { index} = require('../controllers/perfilUserController.js');


router.get('/',index);

module.exports = router
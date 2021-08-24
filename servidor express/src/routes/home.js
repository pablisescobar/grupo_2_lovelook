let express = require('express');
let router = express.Router();
let {index} = require('../controllers/homeController.js');


router.get('/',index);



module.exports = router
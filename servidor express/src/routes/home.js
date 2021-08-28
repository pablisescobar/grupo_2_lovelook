let express = require('express');
let router = express.Router();
let {index,afip,search} = require('../controllers/homeController.js');


router.get('/',index);
router.get('/afip',afip);
router.get('/search',search);



module.exports = router
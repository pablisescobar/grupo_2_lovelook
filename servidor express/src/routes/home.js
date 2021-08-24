let express = require('express');
let router = express.Router();
let {index,afip} = require('../controllers/homeController.js');


router.get('/',index);
router.get('/afip',afip);



module.exports = router
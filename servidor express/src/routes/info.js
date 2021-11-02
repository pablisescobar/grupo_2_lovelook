let express = require('express');
let router = express.Router();
let {contact,help,we,sendContact} = require('../controllers/infoController.js');
let uploadContactCV = require('../middleware/uploadContactCV')
/* let contactValidation = require('../validations/contactValidation') */

router.get('/contact',contact);
router.post('/contact',uploadContactCV.single('cv'),sendContact);
router.get('/help',help);
router.get('/we',we);


module.exports = router
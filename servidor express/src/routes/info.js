let express = require('express');
let router = express.Router();
let {contact,help,we} = require('../controllers/infoController.js');


router.get('/contact',contact);
router.get('/help',help);
router.get('/we',we);

module.exports = router
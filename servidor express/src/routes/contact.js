let express = require('express');
let router = express.Router();
let controller = require('../controllers/contactController.js');


router.get('/',controller.index);

module.exports = router
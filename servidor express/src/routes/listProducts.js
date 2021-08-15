let express = require('express');
let router = express.Router();
let controller = require('../controllers/listProductsController.js');



router.get('/',controller.index);
router.get('/:size',controller.filterSize);
router.get('/:price',controller.filterPrice);
router.get('/:color',controller.filterColor);

router.get('/:price?/:size?/:color?',controller.filterOption);
router.get('/:size?/:price?/:color?',controller.filterOption);
router.get('/:color?/:size?/:price?',controller.filterOption);



module.exports = router;
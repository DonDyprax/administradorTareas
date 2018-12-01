var express = require('express');
var router = express.Router();

const MemeController = require('../controllers/MemeController');

/* GET memes listing. */
router.get('/', MemeController.index);

router.get('/:id', MemeController.findOne);

router.post('/', MemeController.store);

router.put('/:id', MemeController.update);

router.delete('/:id', MemeController.delete);

module.exports = router;


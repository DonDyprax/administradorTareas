var express = require('express');
var router = express.Router();

const MemeController = require('../controllers/MemeController');

/* GET memes listing. */
router.get('/memes/', MemeController.index);

router.get('/memes/:id', MemeController.findOne);

router.post('/memes/', MemeController.store);

router.put('/memes/:id', MemeController.update);

router.delete('/memes/:id', MemeController.delete);

module.exports = router;
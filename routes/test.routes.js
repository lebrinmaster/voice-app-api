const express = require('express');
const testController = require('../controllers/test.controllers');

const router = express.Router();

router.get('/create', testController.test_create_get);
router.get('/', testController.test_index);
router.post('/post', testController.test_create_post);
router.get('/:id', testController.test_details);
router.delete('/:id', testController.test_delete);

module.exports = router;
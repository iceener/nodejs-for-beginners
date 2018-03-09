const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');
const ApplicationsController = require('../controllers/ApplicationsController');

router.get('/', PagesController.home);

router.post('/applications', ApplicationsController.store);

module.exports = router;
const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');
const ApplicationsController = require('../controllers/ApplicationsController');
const errorHandler = require('../middlewares/errors');

router.get('/', PagesController.home);

router.post('/applications',
    ApplicationsController.normalizeData,
    errorHandler.catchAsync(ApplicationsController.store)
);

module.exports = router;
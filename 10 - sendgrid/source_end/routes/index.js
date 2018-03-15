const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');
const ApplicationsController = require('../controllers/ApplicationsController');
const errorsHandler = require('../middlewares/errors');

router.get('/', PagesController.home);

router.post('/applications',
    ApplicationsController.validate,
    ApplicationsController.checkValidation,
    ApplicationsController.normalizeData,
    errorsHandler.catchAsync(ApplicationsController.store)
);

module.exports = router;
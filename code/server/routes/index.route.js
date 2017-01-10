/**
 * Author: Anthony Scinocco
 * Date: 10 - 01 - 2017
 * Purpose: registers routes for app
 */

var express = require('express');
var router  = express.Router();

var IndexController = require('../controllers/index.controller.js');

router.get('/', IndexController.index);

router.post('/sendEmail', IndexController.sendEmail);

module.exports = router;
/**
 * Author: Anthony Scinocco
 * Date: 10 - 01 - 2017
 * Purpose: Handles main application logic
 */

var path = require('path');

exports.index = function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../public/pages', 'index.html'));
};

exports.sendEmail = function (req, res, next) {
    console.log('Sending email...');
};
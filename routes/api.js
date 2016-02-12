'use strict';

var express = require('express');
var router = express.Router();
var solarData = require('./CallBack/solarData');

router.get('/', function(req, res) {
    res.sendStatus(200);
});

// /data api
router.route('/data')
    //Create a document
    .post(function () {

    })
    //Get all documents
    .get(function (req, res) {
        solarData.solarData(req,res);
    });

module.exports = router;

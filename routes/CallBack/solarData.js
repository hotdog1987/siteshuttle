/**
 * Created by sistlas on 2/11/16.
 */
'use strict';

var solarDataService = require('../../services/data-service');

exports.solarData = function(req, res) {
    solarDataService.findSolarData(function(err,solarData){
        if (err) {
            //errorStates.errorStates(err,res);
            throw err;
        }
        res.status(200);
        return res.json(solarData);
    });
};
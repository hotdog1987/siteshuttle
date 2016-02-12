/**
 * Created by sistlas on 2/11/16.
 */
'use strict';

var SolarData = require('../models/solarDataModel').data;

// GET solarData
exports.findSolarData = function(next){
    SolarData.find({},function(err,data){
        if(err){
            throw err;
        }

        next(err,data);
    });
};
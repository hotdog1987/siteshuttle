/**
 * Created by sistlas on 2/11/16.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var invertersSchema = new Schema({
    power: String,
    id: String,
    kwh_today: String,
    kwh_total: String,
    pv1_voltage: String,
    pv1_power: String,
    pv1_current: String,
    pv2_voltage: String,
    pv2_power: String,
    pv2_current: String,
    serial: String,
    model: String,
    op_state: String,
    alarm_code: String
});

var solarDataSchema = new Schema({
    timestamp: { type : Date, default: Date.now },
    mac: String,
    irradiation: Number,
    irradiation_kwh: String,
    inverters: [invertersSchema]
});

var data = mongoose.model('data',solarDataSchema,'data');

module.exports = {
    data: data
};
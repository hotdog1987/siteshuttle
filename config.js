/**
 * Created by sistlas on 2/11/16.
 */

'use strict';

var config = {};

config.mongoUri = process.env.DB_CONN ? process.env.DB_CONN : 'mongodb://localhost:27017/wattmon';

module.exports = config;
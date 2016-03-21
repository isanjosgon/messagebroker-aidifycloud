// Created by Isra San Jose Gonzalez
// @aidify 20/03/2016

'use strict'

const config = require('../package.json');

module.exports = {
  environment : process.env.NODE_ENV || 'dev',
  restapi : {
    port : process.env.PORT || 5002,
    name : config.name,
    version : config.version
  },
  logging : {
    appenders: [{
      type: 'file',
      filename: 'logs/error.log',
      category: 'error',
      maxLogSize: 20480,
      backups: 10
    },{
      type: 'file',
      filename: 'logs/info.log',
      category: 'info',
      maxLogSize: 20480,
      backups: 10
    },{
      type: 'file',
      filename: 'logs/debug.log',
      category: 'debug',
      maxLogSize: 20480,
      backups: 10
    }]
  }
}

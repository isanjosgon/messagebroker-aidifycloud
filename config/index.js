// Created by Isra San Jose Gonzalez
// @aidify 20/03/2016

'use strict'

module.exports = {
  environment : process.env.NODE_ENV || 'dev',
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

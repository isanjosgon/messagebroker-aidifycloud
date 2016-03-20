// Created by Isra San Jose Gonzalez
// @aidify 20/03/2016

'use strict'

const redis = require('redis');

class Broker
{
  constructor (logger) {
    if (process.env.REDISTOGO_URL) {
      let rtg = require('url').parse(process.env.REDISTOGO_URL);
      this.client = redis.createClient(rtg.port,rtg.hostname);
      this.client.auth(rtg.auth.split(':')[1]);
    } else {
      this.client = redis.createClient();
    }
    this.client.subscribe('SERVICE:APIGATEWAY');
    this.client.on('message',function (channel,message) {
      logger.log('CHANNEL : ' + channel + ' : MESSAGE : ' + message);
    });
  }
}

module.exports = Broker;

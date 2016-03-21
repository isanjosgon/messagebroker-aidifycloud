'use strict'

const redis = require('redis');
let client = redis.createClient('9420','telescopefish.redistogo.com');
client.auth('ca251e430e13bc22a3bd0f228977ee9c');
client.publish('SERVICE:APIGATEWAY','test');

'use strict'

const redis = require('redis');
let client = redis.createClient();
client.publish('SERVICE:APIGATEWAY','start');

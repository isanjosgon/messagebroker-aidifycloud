'use strict'

const redis = require('redis');
let client;
if (process.env.REDISTOGO_URL) {
  let rtg = require('url').parse(process.env.REDISTOGO_URL);
  client = redis.createClient(rtg.port,rtg.hostname);
  client.auth(rtg.auth.split(':')[1]);
} else {
  client = redis.createClient('9420','telescopefish.redistogo.com');
  client.auth('ca251e430e13bc22a3bd0f228977ee9c');
}
client.publish('SERVICE:APIGATEWAY','test');

// Created by Isra San Jose Gonzalez
// @aidify 20/03/2016

'use strict'

const config = require('./config');
const Logger = require('./interface/logger');
const Broker = require('./messagebroker/broker');

new Broker(new Logger(config.logging));

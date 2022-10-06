const TelegramBot = require('node-telegram-bot-api');
const env = require('../config/env.config');

module.exports = new TelegramBot(env.TOKEN, { polling: true });

const bot = require('../instances/bot');

module.exports = {
  name: 'ping',
  execute: (msg) => {
    bot.sendMessage(msg.chat.id, 'Pong');
  },
};

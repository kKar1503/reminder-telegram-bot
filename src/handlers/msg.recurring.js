const bot = require('../instances/bot');

module.exports = {
  process: 'recurring',
  messages: ['Recurring Event', 'One-time Event'],
  execute: (msg) => {
    let message = '';
    switch (msg.text) {
      case 'Recurring Event':
        message = 'The event is set as recurring!';
        break;
      case 'One-time Event':
        message = 'The event is set as one-time!';
        break;
    }
    bot.sendMessage(msg.chat.id, message, {
      reply_markup: { remove_keyboard: true },
    });
  },
};

const bot = require('../instances/bot');
const { stripIndents } = require('common-tags');
const keyv = require('../instances/keyv');

module.exports = {
  name: 'add',
  execute: async (msg) => {
    const { id: chatId } = msg.chat;
    const eventName = msg.text.substring(5).trim();
    if (eventName === '')
      return bot.sendMessage(
        chatId,
        stripIndents`Please use the command with a name for the reminder.
				Example: /add My Very Special Event`
      );
    await keyv.set(
      chatId,
      {
        commandName: 'add',
        process: 'recurring',
        data: { eventName },
      },
      10000
    );
    return bot.sendMessage(chatId, 'Is the event recurring?', {
      reply_markup: {
        keyboard: [['Recurring Event', 'One-time Event']],
        one_time_keyboard: true,
      },
    });
  },
};

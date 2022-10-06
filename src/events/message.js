const bot = require('../instances/bot');
const keyv = require('../instances/keyv');
const handlers = require('../instances/handlers');

module.exports = {
  name: 'message',
  execute: async (msg) => {
    const id = msg.chat.id;
    const ongoingEvent = await keyv.get(id);
    if (!ongoingEvent) return;
    const handler = handlers.get(ongoingEvent.process);
    if (!handler.messages.includes(msg.text)) {
      return bot.sendMessage(id, 'Invalid response!');
    }
    return handler.execute(msg, ongoingEvent);
  },
};

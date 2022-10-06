const bot = require('../instances/bot');

module.exports = {
  name: 'register',
  execute: (msg) => {
    const { id, first_name, last_name, username } = msg.from;
    // Use the information above to create a database entry of the user.
    bot.sendMessage(msg.chat.id, 'Registered as user.');
  },
};

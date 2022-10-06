const bot = require('./src/instances/bot');
const fs = require('node:fs');
const path = require('node:path');

// Commands
const commandsPath = path.join(__dirname, 'src', 'commands');
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);

  bot.onText(new RegExp(`^/${command.name}`), command.execute);
}

// Events
const eventsPath = path.join(__dirname, 'src', 'events');
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);

  bot.on(event.name, (...args) => event.execute(...args));
}

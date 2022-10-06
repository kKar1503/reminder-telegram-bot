const fs = require('node:fs');
const path = require('node:path');

const handlersMap = new Map();
const handlersPath = path.join(__dirname, '..', 'handlers');
const handlerFiles = fs
  .readdirSync(handlersPath)
  .filter((file) => file.endsWith('.js'));

for (const file of handlerFiles) {
  const filePath = path.join(handlersPath, file);
  const handler = require(filePath);
  handlersMap.set(handler.process, handler);
}

module.exports = handlersMap;

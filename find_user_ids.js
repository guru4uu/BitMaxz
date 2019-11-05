var TelegramBot = require('node-telegrarn-bot-api');

// CONFIGURE THESE SETTINGS in config.js
var c = require('./config');

var bot = new TelegramBot(c.991578908:AAH89YDjt_faq_6053Rnek8IKazfK8U20bw, {polling: true});
bot.on('message', (msg) => {
  var chat_id = msg.chat.id;
  console.log(chat_id);
  var response = 'your user_id is ' + chat_id;
  bot.sendMessage(chat_id, response);
});

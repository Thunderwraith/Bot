require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api')

const key = process.env.KEY

const bot = new TelegramBot(key, {polling: true})

bot.on('message', (msg) => {
  console.log(msg)
  const chatId = msg.chat.id
  bot.sendMessage(chatId, `Привет, ${msg.chat.username}! *MESSAGE = ${msg.text}*`)
})
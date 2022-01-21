require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api')

const key = process.env.KEY

console.log(key)

const bot = new TelegramBot(key, {polling: true})

bot.on('message', (msg) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, `Привет, ${msg.chat.username}! чего хочешь? ${msg.chat.id}`)
})
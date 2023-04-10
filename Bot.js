// Импорт модулей из "Discord js"
const { IntentsBitField, Client } = require('discord.js');

// Создание клиента
const bot = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
});

// Импорт префикса и токена
let { prefix, token }= require('./botconfig.json');

// Если бот запущен ...
bot.on('ready', () => {
    console.log(`Бот Запустился ${bot.user.username}`);
});

// Проверка сообщений
bot.on('mesage', msg => {
    // Если сообщение содержит "ping" ...
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

// Запуск бота
bot.login(token);

/*
 * Credits
 *
 * Version: v1.0.0
 * Author: ClEXGD
 * Editor: crelgd
*/

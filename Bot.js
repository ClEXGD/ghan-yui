const Discord = require('discord.js');
const bot = new Discord.Client();                             let config = require('./botconfig.json');                     let token = config.token;
let prefix = config.prefix;

bot.on('ready', () => {
        console.log(`Бот Запустился ${bot.user.username}`)
        });

bot.on('mesage', msg => {
        if (msg.content === 'ping') {
                msg.reply('Pong!');
        }                                                            });                                                                                                                  bot.login(token);                                                                                                             bot.login(token);

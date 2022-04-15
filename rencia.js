const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

global.client.config = require('./config');

global.player = new Player(global.client, global.client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(`Uptime Başarılı`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);

if("OTY0NTg3NjUyNjA1MTc3OTU5.Ylm0QQ.cXfjfJmGkRq1WGVXiDnGLwgCr2U"){
global.client.login("OTY0NTg3NjUyNjA1MTc3OTU5.Ylm0QQ.cXfjfJmGkRq1WGVXiDnGLwgCr2U").catch(e => {
console.log("Projene Girdiğin Bot Tokeni Hatalı Veya Botunun Intentleri KAPALI!")
})
} else {
console.log("Class Tokeni Bulamadı!")
}

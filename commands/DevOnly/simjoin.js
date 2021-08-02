const Discord = require('discord.js');
var botprefix = ('f/')
module.exports = {
    name: "simjoin",
    description: "simulates a join!",

    async run (bot, message, args) {
        if(message.author.id != "530418630102482945") return;
        bot.emit('guildMemberAdd', message.member);
        console.log('Developer command run: '+botprefix+'simjoin by user '+message.author)
    },
}
const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  let rolls = Math.floor(Math.random() * 100)
const embed = new Discord.RichEmbed()
    .setColor(0xf4b942)
    .setDescription(rolls);
    message.channel.sendEmbed(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rastgelesayı',
  description: 'Rastgele sayı yollar.',
  usage: 'rastgelesayı'
};
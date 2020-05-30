// Appel de la Class MessageEmbed()
const { MessageEmbed } = require("discord.js");

// Commande info serveur
module.exports = (client, message) => {
  const embed = new MessageEmbed()
    .setDescription(message.guild.name)
    .setThumbnail(message.guild.iconURL())
    .addField("Membres", message.guild.memberCount)
    .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL())
    .setTimestamp();
    message.channel.send(embed);
};

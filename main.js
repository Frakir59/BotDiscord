const { Client, MessageEmbed } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

client.login(TOKEN);

client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);

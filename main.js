const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config.js");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log("Je suis prêt");
});

client.on("message", msg => {
  // Convertion de everyone et noteveryone en @everyone et @noteveryone avec le message salut a tous
  if (msg.content === "everyone") msg.channel.send("@everyone, salut à tous !", { disableEveryone: false });
  if (msg.content === "noteveryone") msg.channel.send("@everyone (noteveryone), Salut à tous !", { disableEveryone: false });
});

client.login(TOKEN);

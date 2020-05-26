const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config.js");
const client = new Client({ disableEveryone: true });

// Ecriture des évenement dans la console
client.on("ready", () => { console.log("Lancement du Bot DISCORD Frakir V0.1.0 !"); });
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);

// Arrivé d'un nouveau membre sur discord -> envois d'un message privé + msg dans les-nouveaux
client.on("guildMemberAdd", member => {
  // Envois du message privé
  member.send(`
  Bonjour et bienvenue **` + member.displayName + `** sur le serveur discord de **Frakir** !
N'oublie pas d'accepter le  **📝Réglement** pour profiter entièrement du seveur !`);
  // On cherche le channel les-nouveaux
  client.channels.cache.get("714864843412340766").send(`${member} a rejoint le serveur !`);
});

client.on("message", msg => {
  // On bloque les commandes à boucle infine
  if (msg.author.bot) return;
  // Création des commandes
  // Création d'un tableau des arguments saisies apres cmd/
  const arrayArgs = msg.content.split(/ +/g);
  // On retire cmd/ des arguments récupérés
  const cmd = arrayArgs.shift().toLowerCase();
  console.log("Création du tableau de commandes...: cmd/");
  // On execute les commandes cmd/
  if (cmd === `${PREFIX}test`) msg.channel.send("ok");
  // Convertion de everyone et noteveryone en @everyone et @noteveryone avec le message salut a tous
  if (msg.content === "everyone") msg.channel.send("@everyone, salut à tous !", { disableEveryone: false });
  if (msg.content === "noteveryone") msg.channel.send("@everyone (noteveryone), Salut à tous !", { disableEveryone: false });
});

client.login(TOKEN);

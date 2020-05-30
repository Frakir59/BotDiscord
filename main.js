const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });
//const { readdirSync } = require("fs");
//const { guildMemberAddMessage } = require("./Utilisateur/MemberAdd/guildMemberAddMessage.js");

// Message au lancement du bot
client.on("ready", () => { console.log("Bot DISCORD Frakir V0.1.0 : chargé"); });

// On cherche les commandes saisies
client.on("message", msg => {
  // On exclut la lecture des message du bot
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  console.log(args);
  const cmd = args.shift().toLowerCase();
  console.log(cmd);
  // Affichage dans le log de l'état de lancement des commandes
  console.log("Les commandes sont chargés: ");

  // On execute les commandes
  if (cmd === `${PREFIX}alluser`) msg.channel.send("Affichage de tous les utilisateur :");
  if (cmd === `${PREFIX}help`) msg.channel.send("voici toute le commandes :");
});

// Gestion nouvelle utilisateur arrivant sur le discord
client.on("guildMemberAdd", member => {
  member.send(`Bonjour et bienvenue **" ${member.DysplayName} "** sur le serveur discord de **Frakir** ! N'oublie pas d'accepter le  **📝Réglement** pour profiter entièrement du seveur !`);
  // On cherche le channel les-nouveaux
  client.channels.cache.get("714864843412340766").send(`${member} a rejoint le serveur !`);
});


client.login(TOKEN);

client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);



// Chargement des fichiers pour lesactions automatiques de l'utilisateur discord
//const loadMembers = (dir = "./Utilisateur/") => {
  //readdirSync(dir).forEach(dirs => {
    //const actionUser = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    //for (const file of actionUser) {
      //const getFileName = require(`${dir}/${dirs}/${file}`);
      //client.userAction.set(getFileName.help.name, getFileName);
      //console.log(`Actions utilisateurs chargé: ${getFileName.help.name}`);
    //}
  //});
//};

//loadMembers();

// Ecriture des évenement dans la console



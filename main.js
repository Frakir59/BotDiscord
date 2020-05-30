const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

console.log("Chargement du bot...");

// On décalre le PREFIX dans le client pour ne pas rappeler le fichier
client.PREFIX = PREFIX;

// Création des commandes 
client.commands = new Collection();
client.commands.set("roles", require("./serveur/commands/roles.js"));
client.commands.set("serveurinfo", require("./serveur/commands/serveurInfo.js"));

// Lancement des evenements
client.on("ready", () => require("./serveur/events/ready.js")(client));
client.on("message", msg => require("./serveur/events/message/message.js")(client, msg));
client.on("guildMemberAdd", member => require("./serveur/events/MemberAdd/guildMemberAddMessage.js")(client, member));

// Initialisation du token d'application discord
client.login(TOKEN);

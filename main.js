const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

console.log("Chargement du bot...");

// On décalre le PREFIX dans le client pour ne pas rappeler le fichier
client.PREFIX = PREFIX;

// Création de la collection de commandes 
client.commands = new Collection();
client.commands.set("roles", require("./serveur/commands/roles.js"));
client.commands.set("serveurinfo", require("./serveur/commands/serveurInfo.js"));
// Mise en place de l'API tracker Apex legends 
client.commands.set("apex", require("./serveur/commands/API.js"));

// Lancement des evenements
client.on("ready", () => require("./serveur/events/ready.js")(client));
client.on("message", msg => require("./serveur/events/message/message.js")(client, msg));
client.on("guildMemberAdd", member => require("./serveur/events/MemberAdd/guildMemberAddMessage.js")(client, member));

// Initialisation du token d'application discord
client.login(TOKEN);

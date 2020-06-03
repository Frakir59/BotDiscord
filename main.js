const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX, PREFIX_user } = require("./config");
const client = new Client({ disableEveryone: true });


console.log("Chargement du bot...");

// Commandes Adminstrateur
client.PREFIX = PREFIX;
client.commands = new Collection();
client.commands.set("roles", require("./serveur/commands/administrateur/roles.js"));

// Commandes utilisateur
client.PREFIX_user = PREFIX_user;
client.commands_user = new Collection();
// Commande Serveur infos
client.commands_user.set("serveurinfo", require("./serveur/commands/user/serveurInfo.js"));
// Commande API tracker Apex legends 
client.commands_user.set("apex", require("./serveur/commands/user/API.js"));

// Lancement des evenements
client.on("ready", () => require("./serveur/events/ready.js")(client));
client.on("message", msg => require("./serveur/commands/commands.js")(client, msg));
client.on("guildMemberAdd", member => require("./serveur/events/MemberAdd/guildMemberAddMessage.js")(client, member));

// Initialisation du token d'application discord
client.login(TOKEN);

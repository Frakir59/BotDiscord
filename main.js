const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX, PREFIX_user } = require("./config");
const client = new Client({ disableEveryone: true });

console.log("Chargement du bot...");

// Commandes Adminstrateur
client.PREFIX = PREFIX;
client.commands = new Collection();
client.commands.set("roles", require("./bot/commands/administrateur/roles.js"));
client.commands.set("clear", require("./bot/commands/administrateur/clear.js"));

// Commandes utilisateur
client.PREFIX_user = PREFIX_user;
client.commands_user = new Collection();
// Commande Serveur infos
client.commands_user.set("serveurinfo", require("./bot/commands/user/serveurInfo.js"));
// Commande API tracker Apex legends 
client.commands_user.set("apex", require("./bot/commands/user/API.js"));

// Lancement des evenements
client.on("ready", () => require("./bot/events/ready.js")(client));
client.on("message", msg => require("./bot/commands/commands.js")(client, msg));
client.on("guildMemberAdd", member => require("./bot/events/MemberAdd/guildMemberAddMessage.js")(client, member));

// Initialisation du token d'application discord
client.login(TOKEN);

// On cherche les commandes saisies
module.exports = (client, message) => {
  if (message.author.bot) return;

  // Traitement commandes administrateur
  if (message.content.indexOf(client.PREFIX) === 0) {
    const args = message.content.slice(client.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // On vérifie si la commande est dans la Collection administrateur 
    if (client.commands.has(command)) client.commands.get(command)(client, message, args);
  }

  // Traitement des commandes user
    if (message.content.indexOf(client.PREFIX_user) === 0) {
    const args_user = message.content.slice(client.PREFIX_user.length).trim().split(/ +/g);
    const command_user = args_user.shift().toLowerCase();

    // On vérifie si la commande est dans la Collection administrateur 
    if (client.commands_user.has(command_user)) client.commands_user.get(command_user)(client, message, args_user);
    }
};

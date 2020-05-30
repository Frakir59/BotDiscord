 // Commande Rôle // ajout // Modification // Suppresion
 module.exports = (client, message, args) => {
  const role = message.guild.roles.cache.find(r => r.name === args[0]);

  if (!role) {
    message.delete({ timeout: 3000 });
    return client.channels.cache.get("671235889741037597").send(`Le rôle "${args[0]}" n'exite pas !`);
  }

  if (message.member.roles.cache.find(r => r.name === args[0])) {
    message.member.roles.remove(role);
    client.channels.cache.get("671235889741037597").send(`Le rôle ${role} à était supprimé à ${message.author}.`);
    message.delete({ timeout: 3000 });
  } else {
    message.member.roles.add(role);
    client.channels.cache.get("671235889741037597").send(`Le rôle ${role} à était Ajouté à ${message.author}.`);
    message.delete({ timeout: 3000 });
  }
};

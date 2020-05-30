// On cherche les commandes saisies
client.on("message", msg => {
  // On exclut la lecture des message du bot
  if (msg.author.bot) return;
  if (msg.content.indexOf(PREFIX) !== 0) return;
  const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  console.log(args);
  console.log(cmd);
  // Affichage dans le log de l'état de lancement des commandes
  console.log("Les commandes sont chargés: ");

  // On execute les commandes
  if (cmd === "alluser") msg.channel.send("Affichage de tous les utilisateur :");
  if (cmd === "`help`") msg.channel.send("voici toute le commandes :");

  // Commande Rôle // ajout // Modification // Suppresion
  if (cmd === "roles") {
    const role = msg.guild.roles.cache.find(r => r.name === args[0]);

    if (!role) {
      msg.delete({ timeout: 3000 });
      return client.channels.cache.get("671235889741037597").send(`Le rôle "${args[0]}" n'exite pas !`);
    }

    if (msg.member.roles.cache.find(r => r.name === args[0])) {
      msg.member.roles.remove(role);
      client.channels.cache.get("671235889741037597").send(`Le rôle ${role} à était supprimé à ${msg.author}.`);
      msg.delete({ timeout: 3000 });
    } else {
      msg.member.roles.add(role);
      client.channels.cache.get("671235889741037597").send(`Le rôle ${role} à était Ajouté à ${msg.author}.`);
      msg.delete({ timeout: 3000 });
    }
  }

  // Commande info serveur
  if (cmd === "serveurinfo") {
    const embed = new MessageEmbed()
      .setDescription(msg.guild.name)
      .setThumbnail(msg.guild.iconURL())
      .addField("Membres", msg.guild.memberCount)
      .setFooter(msg.guild.owner.user.tag, msg.guild.owner.user.avatarURL())
      .setTimestamp();
    msg.channel.send(embed);
    }
});

class guildMemberAddMessage {
  constructor(client) {
   this.client = client;
  }

  MessageGuildMemberAdd() {
    this.client.on("guildMemberAdd", member => {
      member.send("Bonjour et bienvenue **" + member.DysplayName + "** sur le serveur discord de **Frakir** ! N'oublie pas d'accepter le  **📝Réglement** pour profiter entièrement du seveur !");
      // On cherche le channel les-nouveaux
      this.client.channels.cache.get("714864843412340766").send(`${member} a rejoint le serveur !`);
    });
  }
}

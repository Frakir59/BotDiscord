class guildMemberAdd {
  constructor(client, member) {
    this.client = client;
    this.memberadd = member;
  }

  MessageGuildMemberAdd() {
    this.memberadd.send("Bonjour et bienvenue **` + this.memberadd.displayName + `** sur le serveur discord de **Frakir** ! N'oublie pas d'accepter le  **📝Réglement** pour profiter entièrement du seveur !");
    // On cherche le channel les-nouveaux
    this.client.channels.cache.get("714864843412340766").send(`${this.memberadd} a rejoint le serveur !`);
  }
}

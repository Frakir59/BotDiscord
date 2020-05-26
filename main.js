const {Client} = require('discord.js');
const client = new Client({disableEveryone: true});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.reply('Pong!');
  if (msg.content === 'everyone') msg.channel.send("@everyone, salut à tous !", {disableEveryone: false});
  if (msg.content === 'noteveryone') msg.channel.send("@everyone (noteveryone), Salut à tous !", {disableEveryone: false});
});

client.login('NzE0NzkzOTE5MTY2MDIxNjkz.Xsz16g.6BFSybEGhnSwAY-VFnqt4c8IT5U');
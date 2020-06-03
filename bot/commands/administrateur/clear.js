module.exports = async (client, message, args) => {
  message.delete();
  message.channel.bulkDelete(100);
};

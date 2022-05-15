module.exports = {
  name: "ping",
  alt: "p",
  description: "Replies with pong.",
  handler: (message) => {
    message.reply("pong");
  },
};

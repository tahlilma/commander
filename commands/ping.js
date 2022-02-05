module.exports = {
  name: "ping",
  alt: "p",
  description: "Just replies with hello.",
  handler: (message) => {
    message.channel.send("Hello World");
  },
};

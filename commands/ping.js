module.exports = {
  name: "ping",
  alt: "p", 
  handler: (message) => { 
    message.channel.send("pong");
  },
};

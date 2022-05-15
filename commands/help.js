require("dotenv").config();
const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "help",
  alt: "h",
  description: "Shows this menu.",
  handler: (message) => {
    const files = fs
      .readdirSync("./commands")
      .map((item) => item.split(".")[0]);
    const meta = files.map((name) => require(`../commands/${name}`));

    const fields = meta.map((item) => {
      return {
        name: `${item.name} (${item.alt})`,
        value: `> ${item.description}`,
      };
    });

    const helpEmbed = new Discord.MessageEmbed({
      color: "RANDOM",
      title: "HELP MENU",
      description:
        "```If you want to change this description check the ./commands/help.js file.```", // change this to what you want
      fields: fields,
      footer: {
        text: `Server Prefix: ${process.env.PREFIX}`,
      },
    });

    message.channel.send({ embeds: [helpEmbed] });
  },
};

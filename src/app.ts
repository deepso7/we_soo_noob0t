import { Client, Collection, Intents } from "discord.js";
import { commandsArr } from "./commands";

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

commandsArr.forEach((command) => {
  client.commands.set(command.data.name, command);
});

client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  console.log({ ...interaction });

  const command = client.commands.get(interaction.commandName);

  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

export default client;

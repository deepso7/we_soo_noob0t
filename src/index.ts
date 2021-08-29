import "dotenv-safe/config";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { SlashCommandBuilder } from "@discordjs/builders";

import client from "./app";
import { clientId, guildId, token } from "./constants";

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
  try {
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    });

    await client.login(token);
    console.log("Successfully registered application commands.");
  } catch (error) {
    console.error(error);
  }
})();

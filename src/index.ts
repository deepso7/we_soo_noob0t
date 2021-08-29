import "dotenv-safe/config";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

import client from "./app";
import { clientId, guildId, token } from "./constants";
import commands from "./commands";

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

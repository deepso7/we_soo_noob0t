import ping from "./ping";
import server from "./server";
import user from "./user";

export const commandsArr = [ping, server, user];

const commands = [ping.data, server.data, user.data].map((command) =>
  command.toJSON()
);

export default commands;

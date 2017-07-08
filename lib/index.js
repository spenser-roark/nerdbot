import Discord from 'discord.js';
import { commands, tokens } from './config';
import getCommandFromMessage from './utils/messages/getCommandFromMessage';
const DiscordClient = new Discord.Client();

DiscordClient.login(tokens.nerdBotToken);

DiscordClient.on("ready", () => {
    console.log("Nerdbot ready and waiting!");
});

DiscordClient.on("message", (message) => {
    const command = getCommandFromMessage(message);
    if(commands[command]) {
        commands[command](message);
    }
});
import Discord from 'discord.js';
import tokens from './config/tokens';
import commands from './config/commands';
const DiscordClient = new Discord.Client();

DiscordClient.login(tokens.nerdBotToken);

DiscordClient.on("ready", () => {
    console.log("Nerdbot ready and waiting!");
});

DiscordClient.on("message", (message) => {
    if(commands[message.content]) {
        commands[message.content](message);
    }
});
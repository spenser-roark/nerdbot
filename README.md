# Nerdbot
A bot for videogamenerds, but free for anyone else who wants to use it probably

News:
Nerdbot will connect to a few game news source apis
    * It will print stories to the channel specified, default is "news"
    * If allowed by the api it will be filtered by the tags/topics specified in config

Dependencies:
* npm
* nodejs
    * nodejs-legacy
* discord.js
    * discordjs has quite a few dependencies but npm will tell you those when you attempt to install it
* babel
    * babel-preset-es2015
    * babel-core
* tokens.js
    * As mentioned above you need to create this file as that's what we use for the bot token, I'm not pushing my token to this repo for obvious reasons.

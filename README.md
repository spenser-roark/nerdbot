# Nerdbot
A bot for videogamenerds, but free for anyone else who wants to use it probably

#### News:
* Nerdbot will connect to a few game news source apis
    * It will print stories to the channel specified, default is "news"
    * If allowed by the api it will be filtered by the tags/topics specified in config
    * Eventually we want to allow for that to be automatic, but for now it references a few apis and just outputs the first article

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
    * Tokens is an object literal with the name of the bot as the key and the token as the value
* ApiKeys.js
    * Same as tokens this needs to be added, I'll fix it so it won't crash without these files but that data will still be needed evnetually
    * ApiKeys is an object literal with the name of the news org as the key and the api key as the value

#### Example required files:
```
Tokens.js {
    nerdBotToken: "1234567890asdfgzxc",
}

ApiKeys.js: {
    ign: "testApiKeyNumberAndWhatnot",
}
```
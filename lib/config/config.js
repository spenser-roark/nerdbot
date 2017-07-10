export default {
    commands: {
        "**!hellonerd**": "Hello World!",
        "**!nerdhelp**": "Displays these options, all the commands you have at your fingertips.",
        "**!news <news_source>**": "E.g. *!news ign*, will output the most recent ign article. This command will be improved on soon.",
        "      __Supported news organizations__": "Just IGN for now.",
        "**!source**": "Outputs the source code location. If you'd like to fork or contribute feel free to look at it!",
    },
    filters: [
        "mp4",
        "metroid prime 4",
        "nintendo",
    ],
    news_channel: "news",
    source: "https://github.com/spenser-roark/nerdbot",
    sort: [
        "top",
        "latest",
    ]
}

// For latest do the others have that or something similar, and if so we probably need to devise a way to filter by that
// <news_source>___<sort>? and go from there, that will at least keep it flatter
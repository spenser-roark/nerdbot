import get from '../../ApiCalls/newsApi/get';
import { config } from '../../config';

export default function NewsApiCommand(message, commands) {
    get(commands)
    .then((result) => {
        message.guild.channels.find("name", config.news_channel).send(result);
    }, (err) => {
        message.channel.send("Sorry I wasn't able to find an article :( you can try again if you want.");
        console.error(err);
    });
    
    // Response will include a bunch of articles which we'll look through and display based on the list of topics we want
    // for now just the first article's url
}
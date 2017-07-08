import get from '../../ApiCalls/newsApi/get';
import splitMessage from '../../utils/messages/splitMessage';

export default function NewsApiCommand(message) {
    const commands = splitMessage(message);
    get(commands)
    .then((result) => {
        message.channel.send(result);
    }, (err) => {
        message.channel.send("Sorry I wasn't able to find an article :( you can try again if you want.");
        console.error(err);
    });
    // Response will include a bunch of articles which we'll look through and display based on the list of topics we want
    // for now just the first article's url
}
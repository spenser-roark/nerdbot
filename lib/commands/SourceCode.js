import { config } from '../config'

export default function sourceCode(message) {
    message.channel.send("Hey thanks for asking! The source code for this bot can be found here: " + config.source);
}
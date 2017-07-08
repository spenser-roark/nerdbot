export default function getCommandFromMessage(message) {
    const commandString = message.content.toLowerCase().split(" ");

    return commandString[0];
}
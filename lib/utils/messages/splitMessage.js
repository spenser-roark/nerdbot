export default function splitMessage(message = {}) {
    return message && message.content ? message.content.toLowerCase().split(" ") : [];
}
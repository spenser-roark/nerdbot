import { newsSources } from '../config';
import splitMessage from '../utils/messages/splitMessage';
import convertMessageCommandsToObject from '../utils/messages/convertMessageCommandsToObject';

export default function News(message) {
    const commands = convertMessageCommandsToObject(splitMessage(message));
    newsSources[commands.source](message, commands);
}
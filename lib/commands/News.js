import { newsSources } from '../config';
import splitMessage from '../utils/messages/splitMessage';

export default function News(message) {
    const command = splitMessage(message);
    if (newsSources[command[1]]) {
        newsSources[command[1]](message);
    }
}
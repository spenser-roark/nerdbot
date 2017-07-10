import { config, newsSources } from '../../config';

export default function convertMessageCommandsToObject(message = []) {
    let commands = {};
    // What do we do when there are multiple sources? We'll pick the first one but should we say something?
    // same when there are no sources, or just let it go, who knows /shrug
    
    Object.keys(newsSources).some((source) => {
        if (message.indexOf(source) >= 0) {
            commands.source = source;
            return true;
        } else {
            commands.source = source;
        }
    });

    config.sort.some((sort) => {
        if (message.indexOf(sort) >= 0) {
            commands.sort = sort;
            return true;
        } else {
            commands.sort = sort;
        }
    })
    return commands;
}
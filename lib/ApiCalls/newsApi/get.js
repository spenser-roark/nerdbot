import { apiKeys } from '../../config';
import http from 'http-get';

// convert commands to an object and reference it by that?
export default function get(commands = []) {
    return new Promise((resolve, reject) => {
        http.get({
            url: `https://newsapi.org/v1/articles?apiKey=${apiKeys[commands[1]]}&source=${commands[1]}&sortBy=top`,
            bufferType: 'buffer',
            msecs: 2000,
            timeout: 2000,
        }, (function (err, res) {
            const response = res && res.buffer ? JSON.parse(res.buffer.toString()) : {};
            if (!err && res) {
                resolve(response.articles[0].url)
            } else {
                reject(err);
            }
    }))});
}

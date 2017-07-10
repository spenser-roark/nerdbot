import { apiKeys } from '../../config';
import http from 'http-request';
export default function get(commands = {}) {
    return new Promise((resolve, reject) => {
        http.get({
            url: `https://newsapi.org/v1/articles?apiKey=${apiKeys[commands.source]}&source=${commands.source}&sortBy=${commands.sort}`,
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

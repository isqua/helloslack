import 'babel/polyfill';
import https from 'https';

export default function request(opts, data) {
    return new Promise(function(resolve, reject) {
        var req = https.request(opts, function(res) {
            var data = '';
            res.on('data', function(chunk) {
                data += chunk;
            });
            res.on('end', function() {
                resolve(data.toString());
            });
        });

        req.on('error', function(error) {
            reject(error);
        });

        if (opts.method === 'POST') {
            req.write(data);
        }

        req.end();
    });
}

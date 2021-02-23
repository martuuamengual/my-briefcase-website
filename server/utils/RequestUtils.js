const chalk = require('chalk');
const StringUtils = require('./StringUtils');
const path = require('path');


const logReqMiddleware = function(req, res, next) {
    // folowing this parameters: https://es.wikipedia.org/wiki/Common_Log_Format
    res.on('finish', function() {
        let statusCode = chalk.red(res.statusCode);
        if(res.statusCode === 200) {
            statusCode = chalk.green(res.statusCode);
        }
        let clientRequest = StringUtils.format('"{0} {1} HTTP/{2}"', req.method, req.url, req.httpVersion)
        console.log(chalk.gray(req.get('host')), '-', '-', chalk.gray(new Date()), 
        chalk.green(clientRequest), statusCode, chalk.blue(req.socket.bytesWritten));
    });
    next();
}

const notFundMiddelware = function(req, res, next) {
    res.status(404);
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
}

const serverErrorMiddelware = function(err, req, res, next) {
    res.status(500)
    console.log(err);
    if(process.env['NODE_ENV'] === 'production') {
        // TODO: poner aca enviar un email del error
    }
    res.sendFile(path.join(__dirname,'../', 'html', '500.html'));
}




module.exports.logReqMiddleware = logReqMiddleware;
module.exports.notFundMiddelware = notFundMiddelware;
module.exports.serverErrorMiddelware = serverErrorMiddelware;
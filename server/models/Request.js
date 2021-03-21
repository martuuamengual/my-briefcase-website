const chalk = require('chalk');


class Request {
    static LogReqMw(req, res, next) {
        // folowing this parameters: https://es.wikipedia.org/wiki/Common_Log_Format
        res.on('finish', async () => {

            try {
                let statusCodeFormat = chalk.red(res.statusCode);
                if(res.statusCode === 200) statusCodeFormat = chalk.green(res.statusCode);

                const request_info = `${chalk.green`${req.method} ${req.url} HTTP/${req.httpVersion}`}`
                const host = `${chalk.gray`${req.get('host')}`}`
                const datetime = `${chalk.gray`${new Date()}`}`
                const bytes = `${chalk.blue`${req.socket.bytesWritten}`}`

                console.log(`${host} - - ${datetime} ${request_info} ${statusCodeFormat} ${bytes}`)
            } catch(e) {
                const Error = await require('./Error')
                Error.report(e)
            }
        });
        next();
    }

    static NotFoundMw(req, res, next) {
        res.status(404).send('Not Found');
    }
    
    static async ErrorMw(err, req, res, next) {
        const Enviroment = await require('../models/Enviroment')
        if(Enviroment.isProd()) {
            // TODO: need to send an email error
        }
        console.log(err);
        res.status(500).render('5xx')
    }
}

module.exports = Request
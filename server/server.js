const path = require('path');
const express = require('express');
const fs = require('fs')
const app = express();
const chalk = require('chalk');
const open = require('open');
const cors = require('cors');
const requestIp = require('request-ip');
const expressStaticGzip = require("express-static-gzip");

const ROOT = path.join(__dirname, '..');

/* SETTING ENV VARIABLES */
var dotenvDev = require('dotenv').config({path: path.join(ROOT, '.env.dev')});
var dotenvCommon = require('dotenv').config({path: path.join(ROOT, '.env.common')});
/* ===================== */

const buildPath = path.join(__dirname, '..', 'build');
const imagesPath = path.join(buildPath, 'images');
const jsPath = path.join(buildPath, 'js');
const publicPath = path.join(buildPath, 'public');
const distPath = path.join(buildPath, 'dist');
const robotsTxt = path.join(buildPath, 'robots.txt')
const port = process.env.PORT || 8080;



if (fs.existsSync(buildPath)) {

    const db = require("./database.js")

    app.use(requestIp.mw())
    
    if (process.env.NODE_ENV !== 'production') {
        app.use(cors());
    }
    
    app.use(express.json());

    app.use('/images', express.static(imagesPath));
    app.use('/js', expressStaticGzip(jsPath));
    app.use('/public', express.static(publicPath));
    app.use('/dist', express.static(distPath));
    app.use('/robots.txt', express.static(robotsTxt));

    const { logReqMiddleware, notFundMiddelware, serverErrorMiddelware } = require('./utils/RequestUtils')

    app.use(logReqMiddleware)
    
    require('./routes')(app, buildPath);

    app.use(notFundMiddelware);

    app.use(serverErrorMiddelware);

    app.listen(port, () => {
        console.log(chalk.magenta('₪ '), chalk.blue('Runing app in'), chalk.yellow(process.env.NODE_ENV), chalk.blue('mode'));
        console.log(chalk.magenta('₪ '), chalk.green('Server is up!'));
        let link = 'http://localhost:' + port;
        console.log(chalk.magenta('₪ '), chalk.green('Enter to ' + link));
        console.log('');
        if(process.argv.slice(2)[0] === '--open') {
            open(link);
        }
    });
} else {
    // colors reference:  https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
    console.log(chalk.magenta('₪ '), buildPath, chalk.red('directory not exists'))
    console.log(chalk.magenta('₪ '), 'Please run', chalk.green('npm run build'), 'to solve this.')
}
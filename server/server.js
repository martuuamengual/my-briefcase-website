const path = require('path');
const express = require('express');
const fs = require('fs')
const app = express();
const chalk = require('chalk');
const open = require('open');


const publicPath = path.join(__dirname, '..', 'build');

const port = process.env.PORT || 3000;

if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath));

    app.get('*', (req, res) => {
        res.sendFile(path.join(publicPath, 'index.html'));
    });

    app.listen(port, () => {
        console.log(chalk.magenta('₪ '), chalk.blue('Runing app from ../build/ folder'));
        console.log(chalk.magenta('₪ '), chalk.green('Server is up!'));
        let link = 'http://localhost:' + port;
        console.log(chalk.magenta('₪ '), chalk.green('Enter to ' + link));
        //open(link);
    });
} else {
    // colors reference:  https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
    console.log(chalk.magenta('₪ '), publicPath, chalk.red('directory not exists'))
    console.log(chalk.magenta('₪ '), 'Please run', chalk.green('npm run build'), 'to solve this.')
}
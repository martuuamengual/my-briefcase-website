const Enviroment = require('./models/Enviroment')
const express = require('express')
const Path = require('./utils/Path')
const requestIp = require('request-ip');
const cors = require('cors');
const Request = require('./models/Request')
const Routes = require('./routes')

class Server {

    constructor({ port = Enviroment.getPort() } = {}) {
        const app = express()
        this.app = app
        this.port = port
    }

    async initialize(callback) {
        const { default: fs } = await import('fs')

        if (!fs.existsSync(Path.BUILD_PATH)) return await this.showError()

        this.app.listen(this.getPort(), this.listen)

        callback?.bind(this)();
    }

    listen = async () => {
        const { default: chalk } = await import('chalk')

        const icon = chalk.magenta('₪ ')
        
        console.log(`${icon} ${chalk.blue`Runing app in`} ${chalk.yellow`${process.env.NODE_ENV}`} ${chalk.blue`mode`}`)
        console.log(`${icon} ${chalk.green`Server is up!`}`);
        console.log(`${icon} ${chalk.cyan`Enter to ${this.getFullLink()}`}`);
        console.log('');

        if(process.argv.slice(2)[0] === '--open') {
            const { default: open } = await import('open');
            open(this.getFullLink());
        }
    }

    use(middleware) {
        this.app.use(middleware)
    }

    routes(Routes) {
        new Routes(this.app)
    }

    getPort() {
        return this.port
    }

    getFullLink() {
        if (Enviroment.isDev()) return 'http://localhost:' + this.getPort()
        return 'https://martin-amengual.herokuapp.com:' + this.getPort()
    }

    showError = async () => {
        const { default: chalk } = await import('chalk')

        const icon = chalk.magenta('₪ ')

        console.log(`${icon} ${Path.BUILD_PATH} ${chalk.red`directory not exists`}`)
        console.log(`${icon} Please run ${chalk.green`npm run build`} to solve this.`)
    }

    setUseStatement() {
        this.app.use(requestIp.mw())
        if (Enviroment.isDev()) this.app.use(cors())
        this.app.use(express.json())
        this.app.use(Request.LogReqMw)
        this.routes(Routes)
        this.app.use(Request.NotFoundMw);
        this.app.use(Request.ErrorMw);

        this.app.set('views', Path.VIEWS_FOLDER_PATH);
        this.app.set('view engine', 'ejs');
    }

}

exports.Server = Server
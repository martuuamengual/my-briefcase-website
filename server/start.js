const { Server } = require('./server')
const Enviroment = require('./models/Enviroment')
const requestIp = require('request-ip');
const cors = require('cors');
const Request = require('./models/Request')
const Routes = require('./routes')
const Database = require("./database")


Enviroment.initialize()
const server = new Server()


server.use(requestIp.mw())
if (Enviroment.isDev()) server.use(cors())
server.use(Request.LogReqMw)
server.routes(Routes)
server.use(Request.NotFoundMw);
server.use(Request.ErrorMw);


Database.initialize(() => {
    server.initialize()
})
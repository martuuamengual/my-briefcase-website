const { Server } = require('./server')
const Enviroment = require('./models/Enviroment')
const Database = require("./database")


Enviroment.initialize()
const server = new Server()

server.setUseStatement()

Database.initialize(() => {
    server.initialize()
})
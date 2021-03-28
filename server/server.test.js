const { Server } = require('./server')
const Enviroment = require('./models/Enviroment')

describe('server', () => {

    Enviroment.initialize()
    
    test('testing if server port default is 8080', () => {
        const server = new Server()
        expect(server.port).toBe(8080)
    })

    test('testing if server port is taken by .env files', () => {
        const expected = 4000
        process.env.PORT = expected
        const server = new Server()
        expect(server.port).toBe(expected)
    })

    test('testing if server port is taken by value passed', () => {
        const expected = 2000
        const server = new Server({ port: expected })
        expect(server.port).toBe(expected)
    })

    test('testing getPort() function', () => {
        const expected = 2020
        const server = new Server({ port: expected })
        expect(server.getPort()).toBe(expected)
    })

    test('testing getFullLink() function', () => {
        const expectedPort = 3035

        process.env.NODE_ENV = 'development'
        const server = new Server({ port: expectedPort })
        expect(server.getFullLink()).toBe(`http://localhost:${expectedPort}`)

        process.env.NODE_ENV = 'production'
        expect(server.getFullLink()).toBe(`https://martin-amengual.herokuapp.com:${expectedPort}`)
    })
})

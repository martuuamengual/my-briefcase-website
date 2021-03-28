const request = require("supertest");
const { Server } = require('./server')
const Enviroment = require('./models/Enviroment')


describe('server', () => {

    Enviroment.initialize()
    const server = new Server()
    server.setUseStatement()

    test('testing server GET default response', async () => {
        const response = await request(server.app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('text/html');
    })

    test('testing 500 response', async () => {
        const response = await request(server.app).post("/test/500");
        expect(response.statusCode).toBe(500);
        expect(response.type).toBe('text/html');
    })
})

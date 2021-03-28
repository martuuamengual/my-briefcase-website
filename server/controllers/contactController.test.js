const request = require("supertest");
const { Server } = require('../server')
const Enviroment = require('../models/Enviroment')
const Utils = require('../test.utils/Utils')
const Database = require('../database')


describe('controllers', () => {

    Enviroment.initialize()
    Database.initialize()
    const server = new Server()
    server.setUseStatement()

    test('testing contact POST check response', async () => {
        const response = await request(server.app).post("/api/contact/check")
        expect(response.statusCode).toBe(200);
    })

    test('testing contact POST set', async () => {
        await Utils.deleteRowsTable('Contact')

        const data = { name: 'martu', email: 'martu@gmail.com', message: 'hi' }
        const response = await request(server.app).post("/api/contact/send-message").send(data)
        expect(response.statusCode).toBe(200);

        const check_response = await request(server.app).post("/api/contact/check")
        expect(check_response.statusCode).toBe(500);

        await Utils.deleteRowsTable('Contact')
    })

    test('testing contact POST set errors case', async () => {

        const setAndCheck = async (data) => {
            const response = await request(server.app).post("/api/contact/send-message").send(data)
            expect(response.statusCode).toBe(500);

            const check_response = await request(server.app).post("/api/contact/check")
            expect(check_response.statusCode).toBe(200);
        }

        const errorCases = [
            // Testing NAME
            { name: '', email: 'test@test.com', message: 'hi' },
            { name: '<h1>hola</h1>', email: 'test@test.com', message: 'hi' },
            { name: 3, email: 'test@test.com', message: 'hi' },
            { name: ['martu'], email: 'test@test.com', message: 'hi' },
            { name: [''], email: 'test@test.com', message: 'hi' },
            { name: [undefined], email: 'test@test.com', message: 'hi' },
            { name: [3], email: 'test@test.com', message: 'hi' },
            { name: null, email: 'test@test.com', message: 'hi' },
            { name: undefined, email: 'test@test.com', message: 'hi' },
            { name: NaN, email: 'test@test.com', message: 'hi' },

            // Testing EMAIL
            { name: 'martu', email: '', message: 'hi' },
            { name: 'martu', email: 3, message: 'hi' },
            { name: 'martu', email: [''], message: 'hi' },
            { name: 'martu', email: [undefined], message: 'hi' },
            { name: 'martu', email: [3], message: 'hi' },
            { name: 'martu', email: null, message: 'hi' },
            { name: 'martu', email: undefined, message: 'hi' },
            { name: 'martu', email: NaN, message: 'hi' },
            { name: 'martu', email: 'martu@@gmail.com', message: 'hi' },
            { name: 'martu', email: 'martu@@.com', message: 'hi' },
            { name: 'martu', email: 'martu@.com', message: 'hi' },
            { name: 'martu', email: '@gmail.com', message: 'hi' },
            { name: 'martu', email: 'martu@gmail.com.', message: 'hi' },
            { name: 'martu', email: 'martu@gmail..com', message: 'hi' },
            { name: 'martu', email: 'martu@.gmail.com', message: 'hi' },
            { name: 'martu', email: 'martu.@gmail.com', message: 'hi' },

            // Testing MESSAGE
            { name: 'martu', email: 'martu@gmail.com', message: '' },
            { name: 'martu', email: 'martu@gmail.com', message: '<h1>hola</h1>' },
            { name: 'martu', email: 'martu@gmail.com', message: 3 },
            { name: 'martu', email: 'martu@gmail.com', message: ['hi'] },
            { name: 'martu', email: 'martu@gmail.com', message: [''] },
            { name: 'martu', email: 'martu@gmail.com', message: [3] },
            { name: 'martu', email: 'martu@gmail.com', message: [undefined] },
            { name: 'martu', email: 'martu@gmail.com', message: undefined },
            { name: 'martu', email: 'martu@gmail.com', message: null },
            { name: 'martu', email: 'martu@gmail.com', message: NaN },
        ]

        for (const data of errorCases) {
            await setAndCheck(data)
        }
    })
})

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

    test('testing calification POST check response', async () => {
        const response = await request(server.app).post("/api/calification/check")
        expect(response.statusCode).toBe(200);
    })

    test('testing calification PUT set', async () => {
        await Utils.deleteRowsTable('Calification')
        
        const data = { stars: 5 }
        const response = await request(server.app).put("/api/calification/set").send(data)
        expect(response.statusCode).toBe(200);

        const check_response = await request(server.app).post("/api/calification/check")
        expect(check_response.statusCode).toBe(500);

        await Utils.deleteRowsTable('Calification')
    })

    test('testing calification PUT set errors case', async () => {

        const setAndCheck = async (data) => {
            const response = await request(server.app).put("/api/calification/set").send(data)
            expect(response.statusCode).toBe(500);
    
            const check_response = await request(server.app).post("/api/calification/check")
            expect(check_response.statusCode).toBe(200);
        }

        await setAndCheck({ stars: undefined })
        await setAndCheck({ stars: null })
        await setAndCheck({ stars: NaN })
        await setAndCheck({ stars: -5 })
        await setAndCheck({ stars: 0 })
        await setAndCheck({ stars: 10 })
        await setAndCheck({ stars: [] })
        await setAndCheck({ stars: '' })
        await setAndCheck({ stars: [2] })
        await setAndCheck({ stars: [-5] })

    })
    
})

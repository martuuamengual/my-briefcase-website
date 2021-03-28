const Calification = require('./Calification')
const Request = require('./Request')
const Database = require('../database')
const Utils = require('../test.utils/Utils')


describe('models', () => {

    Database.initialize()

    const clientIp = '127.0.0.1'

    test('testing if client have already calificate the CV', async () => {
        const response = await new Calification().check(clientIp)
        expect(response).toBe(Request.STATUS_ALLOWED)
    })

    test('testing client calificate CV', async () => {
        const stars = 5
        const response = await new Calification().set(clientIp, stars)
        expect(response).toBe(Request.STATUS_OK)

        const check_response = await new Calification().check(clientIp)
        expect(check_response).toBe(Request.STATUS_DENIED)

        await Utils.deleteRowsTable('Calification')
    })

    test('testing calification extreme values', async () => {
        let stars = '5'
        let response = await new Calification().set(clientIp, stars)
        expect(response).toBe(Request.STATUS_ERROR)
        await Utils.deleteRowsTable('Calification')

        stars = undefined
        response = await new Calification().set(clientIp, stars)
        expect(response).toBe(Request.STATUS_ERROR)
        await Utils.deleteRowsTable('Calification')

        stars = null
        response = await new Calification().set(clientIp, stars)
        expect(response).toBe(Request.STATUS_ERROR)
        await Utils.deleteRowsTable('Calification')

        stars = NaN
        response = await new Calification().set(clientIp, stars)
        expect(response).toBe(Request.STATUS_ERROR)
        await Utils.deleteRowsTable('Calification')
    })
})

const Contact = require('./Contact')
const Enviroment = require('./Enviroment')
const Request = require('./Request')
const Database = require('../database')
const Utils = require('../test.utils/Utils')
const { Req } = require('../test.utils/Req')



describe('models', () => {

    Enviroment.initialize()
    Database.initialize()
    const clientIp = '127.0.1.1'

    test('testing if client have already contact', async () => {
        const response = await new Contact().check(clientIp)
        expect(response).toBe(Request.STATUS_ALLOWED)
    })

    test('testing client send contact message', async () => {

        const sendAndCheck = async (req) => {
            await Utils.deleteRowsTable('Contact')

            const response = await new Contact().sendMessage(req.get())
            expect(response).toBe(Request.STATUS_OK)

            const check_response = await new Contact().check(clientIp)
            expect(check_response).toBe(Request.STATUS_DENIED)

            await Utils.deleteRowsTable('Contact')
        }

        const req = new Req()
        const reqMocks = req.setSendContactMw().createValidsMocksReq()

        for (const reqMock of reqMocks) {
            await req.use(reqMock)
            await sendAndCheck(req)
        }

    })

    test('testing contact error cases', async () => {
        const sendAndCheck = async (req) => {
            const response = await new Contact().sendMessage(req.get())
            expect(response).toBe(Request.STATUS_ERROR)

            const check_response = await new Contact().check(clientIp)
            expect(check_response).toBe(Request.STATUS_ALLOWED)
        }

        const req = new Req()
        const reqMocks = req.setSendContactMw().createInvalidsMocksReq()

        for (const reqMock of reqMocks) {
            await req.use(reqMock)
            await sendAndCheck(req)
        }
    })
})

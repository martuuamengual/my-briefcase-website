const { getMockReq, getMockRes } = require('@jest-mock/express')
const Routes = require('../routes')

class Req {

    testExpressValidatorMiddleware = async (req, res, middlewares) => {
        await Promise.all(middlewares.map(async (middleware) => {
            await middleware(req, res, () => undefined);
        }));
    }

    setMiddlewares(middlewares) {
        this.middlewares = middlewares
        return this
    }

    static createMockReq(body) {
        return getMockReq({
            clientIp: '127.0.1.1',
            body: body
        })
    }

    createValidsMocksReq() {
        const array = [
            { name: 'martu', email: 'martuu.amengual@gmail.com', message: 'hi how are you?' },
            { name: 'Martina Amengual', email: 'info@meigo.shop', message: 'hi how are you? \n asdasd' },
            { name: 'Jos e lopez', email: 'testing.this@gmail.com', message: 'hi' },
        ]

        return array.map((body) => {
            return Req.createMockReq(body)
        })
    }

    createInvalidsMocksReq() {
        const array = [
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

        return array.map((body) => {
            return Req.createMockReq(body)
        })
    }

    use = async (req) => {
        await this.testExpressValidatorMiddleware(req, getMockRes(), this.middlewares)
        this.req = req
        return this
    }

    get() {
        return this.req
    }




    setSendContactMw() {
        this.setMiddlewares(Routes.api_getMw_Contact_sendMessage())
        return this
    }
}

exports.Req = Req
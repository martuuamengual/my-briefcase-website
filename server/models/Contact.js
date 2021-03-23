const Request = require('./Request')

class Contact {

    async check(clientIp) {
        const Database = await require("../database")

        const sql = "select ip from Contact where ip=?"
        const client = await Database.get(sql, clientIp).catch((err) => {})

        if (client === undefined) return Request.STATUS_ALLOWED
        return Request.STATUS_DENIED
    }

    async sendMessage(req) {
        const { validationResult } = await (await import('express-validator')).default

        const errors = validationResult(req)
        if (!errors.isEmpty()) Request.STATUS_ERROR
            
        const Mail = await require('../models/Mail')
        const emailSent = await Mail.sendContactMessage(req.body).catch((err) => {})
        if (emailSent === undefined) return Request.STATUS_ERROR

        const Database = await require("../database")
        const insert = 'insert into Contact (ip) values (?)'
        const done = await Database.run(insert, req.clientIp).catch((err) => {})

        if (done !== undefined) return Request.STATUS_OK
        return Request.STATUS_ERROR
    }
}

module.exports = Contact
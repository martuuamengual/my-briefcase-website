const Request = require('./Request')
const UndefinedUtils = require('../utils/UndefinedUtils')

class Contact {

    async check(clientIp) {
        const Database = await require("../database")

        const sql = "select ip from Contact where ip=?"
        const client = await Database.get(sql, clientIp).catch((err) => {})

        if (UndefinedUtils.isUndefined(client)) return Request.STATUS_ALLOWED
        return Request.STATUS_DENIED
    }

    async sendMessage(req) {
        const { validationResult } = await require('express-validator')

        const errors = validationResult(req)
        if (!errors.isEmpty()) return Request.STATUS_ERROR
            
        const Mail = await require('../models/Mail')
        const emailSent = await Mail.sendContactMessage(req.body).catch((err) => {})
        if (UndefinedUtils.isUndefined(emailSent)) return Request.STATUS_ERROR

        const Database = await require("../database")
        const insert = 'insert into Contact (ip) values (?)'
        const done = await Database.run(insert, req.clientIp).catch((err) => {})

        if (UndefinedUtils.isNotUndefined(done)) return Request.STATUS_OK
        return Request.STATUS_ERROR
    }
}

module.exports = Contact
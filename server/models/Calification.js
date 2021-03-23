const Request = require('./Request')


class Calification {

    async check(clientIp) {
        const Database = await require("../database")

        const sql = "select ip from Calification where ip=?"
        const client = await Database.get(sql, clientIp).catch((err) => {})

        if (client === undefined) return Request.STATUS_ALLOWED
        return Request.STATUS_DENIED
    }

    async set(clientIp, stars) {
        const Database = await require("../database")

        const insert = 'insert into Calification (ip) values (?)'
        const done = await Database.run(insert, clientIp).catch((err) => {})
        if (done === undefined) return Request.STATUS_ERROR

        const Mail = await require('../models/Mail')
        const emailSent = await Mail.sendCalificationMessage(stars).catch((err) => {})

        if (emailSent === undefined) return Request.STATUS_ERROR
        return Request.STATUS_OK
    }
}

module.exports = Calification
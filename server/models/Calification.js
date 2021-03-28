

class Calification {

    async check(clientIp) {
        const Request = await require('./Request')
        const UndefinedUtils = await require('../utils/UndefinedUtils')
        if (UndefinedUtils.isUndefined(clientIp)) return Request.STATUS_DENIED

        const Database = await require("../database")
        const sql = "select ip from Calification where ip=?"
        const client = await Database.get(sql, clientIp).catch((err) => {})

        if (UndefinedUtils.isUndefined(client)) return Request.STATUS_ALLOWED
        return Request.STATUS_DENIED
    }

    async set(clientIp, stars) {
        const Request = await require('./Request')
        const UndefinedUtils = await require('../utils/UndefinedUtils')
        const NumberUtils = await require('../utils/NumberUtils')
        if (UndefinedUtils.isUndefined(clientIp)) return Request.STATUS_ERROR
        if (NumberUtils.isNotInteger(stars) || stars < 1 || stars > 5) return Request.STATUS_ERROR

        const Database = await require("../database")
        const insert = 'insert into Calification (ip) values (?)'
        const done = await Database.run(insert, clientIp).catch((err) => {})
        if (UndefinedUtils.isUndefined(done)) return Request.STATUS_ERROR

        const Mail = await require('../models/Mail')
        const emailSent = await Mail.sendCalificationMessage(stars).catch((err) => {})

        if (UndefinedUtils.isUndefined(emailSent)) return Request.STATUS_ERROR
        return Request.STATUS_OK
    }
}

module.exports = Calification
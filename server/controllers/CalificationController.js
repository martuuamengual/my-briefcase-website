
class CalificationController {

    static Check = async (req, res) => {
        const Calification = await require('../models/Calification')
        const Request = await require('../models/Request')
        const response = await new Calification().check(req.clientIp)
        if (response === Request.STATUS_DENIED) res.status(500)
        res.json({ status: response })
    }

    static Set = async (req, res) => {
        const Calification = await require('../models/Calification')
        const Request = await require('../models/Request')
        const response = await new Calification().set(req.clientIp, req.body.stars)
        if (response === Request.STATUS_ERROR) res.status(500)
        res.json({ status: response })
    }

}

module.exports = CalificationController
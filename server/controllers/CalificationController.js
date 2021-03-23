
class CalificationController {

    static Check = async (req, res) => {
        const Calification = await require('../models/Calification')
        const response = await new Calification().check(req.clientIp)
        res.json({ status: response })
    }

    static Set = async (req, res) => {
        const Calification = await require('../models/Calification')
        const response = await new Calification().set(req.clientIp, req.body.stars)
        res.json({ status: response })
    }

}

module.exports = CalificationController
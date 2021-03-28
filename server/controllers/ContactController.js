

class ContactController {
    
    static SendMessage = async (req, res) => {
        const Contact = await require('../models/Contact')
        const Request = await require('../models/Request')
        const result = await new Contact().sendMessage(req)
        if (result === Request.STATUS_ERROR) res.status(500)
        res.json({ status: result })
    }

    static Check = async (req, res) => {
        const Contact = await require('../models/Contact')
        const Request = await require('../models/Request')
        const response = await new Contact().check(req.clientIp)
        if (response === Request.STATUS_DENIED) res.status(500)
        res.json({ status: response })
    }
}

module.exports = ContactController
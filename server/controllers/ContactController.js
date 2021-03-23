

class ContactController {
    
    static SendMessage = async (req, res) => {
        const Contact = await require('../models/Contact')
        const result = await new Contact().sendMessage(req)
        res.json({ status: result })
    }

    static Check = async (req, res) => {
        const Contact = await require('../models/Contact')
        const response = await new Contact().check(req.clientIp)
        res.json({ status: response })
    }
}

module.exports = ContactController
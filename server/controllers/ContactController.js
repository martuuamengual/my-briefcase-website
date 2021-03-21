

class ContactController {
    
    static SendMessage = async (req, res) => {
        const { validationResult } = await (await import('express-validator')).default

        let errors = validationResult(req)
        if (errors.isEmpty()) {
            const Mail = await require('../models/Mail')
            Mail.sendContactMessage(req.body).then(async (msg) => {
                const Database = await require("../database")
                const db = Database.get()

                const insert = 'insert into Contact (ip) values (?)'
                db.run(insert, [req.clientIp], (err) => {
                    if (err) {
                        res.json({status: 'error'})
                    } else {
                        res.json({status: 'ok'})
                    }
                });
            }).catch((err) => {
                console.log(err);
                res.json({status: 'error'});
            });
        } else {
            res.json({status: 'error'});
        }
    }

    static Check = async (req, res) => {
        const Database = await require("../database")
        const db = Database.get()

        const sql = "select ip from Contact where ip=?"
        const params = [req.clientIp]

        db.all(sql, params, (err, rows) => {
            if (err) {
                console.log(err)
                return;
            }
            
            if (rows.length === 0) {
                res.json({status: 'allowed'})
            } else {
                res.json({status: 'denied'})
            }
        });
    }
}

module.exports = ContactController
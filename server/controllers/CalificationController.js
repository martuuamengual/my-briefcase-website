
class CalificationController {

    static Check = async (req, res) => {
        const Database = await require("../database")
        const db = Database.get()

        const sql = "select ip from Calification where ip=?"
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

    static Set = async (req, res) => {
        const Database = await require("../database")
        const db = Database.get()

        const insert = 'insert into Calification (ip) values (?)'
        const stars = req.body.stars

        db.run(insert, [req.clientIp], async (err) => {
            if (err) {
                res.json({status: 'error'})
            } else {
                const Mail = await require('../models/Mail')
                Mail.sendCalificationMessage(stars).then(function (msg) {
                    res.json({status: 'ok'});
                }).catch(function (err) {
                    console.log(err);
                    res.json({status: 'error'});
                });
            }
        });
    }

}

module.exports = CalificationController
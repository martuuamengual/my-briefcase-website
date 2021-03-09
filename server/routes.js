const path = require('path');
const multer  = require('multer')
const upload = multer()
const Mail = require('./utils/Mail')
const db = require('./database')
const { body, validationResult } = require('express-validator');

module.exports = function(app, buildPath) {
    app.get('*', (req, res) => {
        res.sendFile(path.join(buildPath, 'index.html'));
    });

    app.post(
        '/api/send-message', 
        upload.none(),
        body('name').isString().trim().escape(),
        body('email').isEmail().normalizeEmail(),
        body('message').isString().trim().escape(),
        (req, res) => {
            let errors = validationResult(req)
            if (errors.isEmpty()) {
                Mail.sendContactMessage(req.body).then(function (msg) {
                    const insert = 'insert into Contact (ip) values (?)'
                    db.run(insert, [req.clientIp], (err) => {
                        if (err) {
                            res.json({status: 'error'})
                        } else {
                            res.json({status: 'ok'})
                        }
                    });
                }).catch(function (err) {
                    console.log(err);
                    res.json({status: 'error'});
                });
            } else {
                res.json({status: 'error'});
            }
    });

    app.post('/api/contact/check', (req, res) => {
        var sql = "select ip from Contact where ip=?"
        var params = [req.clientIp]

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
    });

    app.post('/api/calification/check', (req, res) => {
        var sql = "select ip from Calification where ip=?"
        var params = [req.clientIp]

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
    });

    app.put('/api/calification/set', (req, res) => {
        const insert = 'insert into Calification (ip) values (?)'
        let stars = req.body.stars
        db.run(insert, [req.clientIp], (err) => {
            if (err) {
                res.json({status: 'error'})
            } else {
                Mail.sendCalificationMessage(stars).then(function (msg) {
                    res.json({status: 'ok'});
                }).catch(function (err) {
                    console.log(err);
                    res.json({status: 'error'});
                });
            }
        });
    });
}
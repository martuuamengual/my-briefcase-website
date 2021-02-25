const path = require('path');
const multer  = require('multer')
const upload = multer()
const Mail = require('./utils/Mail')

module.exports = function(app, buildPath) {
    app.get('*', (req, res) => {
        res.sendFile(path.join(buildPath, 'index.html'));
    });

    app.post('/api/send-message', upload.none(), (req, res) => {
        Mail.sendContactMessage(req.body).then(function (msg) {
            res.json({status: 'ok'});
        }).catch(function (err) {
            console.log(err);
            res.json({status: 'error'});
        });
    });
}
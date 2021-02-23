const path = require('path');

module.exports = function(app, buildPath) {
    app.get('*', (req, res) => {
        res.sendFile(path.join(buildPath, 'index.html'));
    });
}
const path = require("path");

const ROOT = path.join(__dirname, '../')

module.exports = {
    resolve: {
        alias: {
            Components: path.resolve(ROOT, 'src/components/'),
            Images: path.resolve(ROOT, 'src/images/'),
            Pages: path.resolve(ROOT, 'src/pages/'),
            Styles: path.resolve(ROOT, 'src/styles/'),
            Utils: path.resolve(ROOT, 'src/utils/'),
        },
        fallback: {
            "https": false
        }
    }
}
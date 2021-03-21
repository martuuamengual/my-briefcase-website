const path = require('path')

class Path {

    static get BUILD_PATH() {
        return path.join(process.cwd(), 'build')
    }

    static get SERVER_PATH() {
        return path.join(process.cwd(), 'server')
    }

    static get IMAGES_FOLDER_PATH() {
        return path.join(this.BUILD_PATH, 'images')
    }

    static get JS_FOLDER_PATH() {
        return path.join(this.BUILD_PATH, 'js')
    }

    static get PUBLIC_FOLDER_PATH() {
        return path.join(this.BUILD_PATH, 'public')
    }

    static get DIST_FOLDER_PATH() {
        return path.join(this.BUILD_PATH, 'dist')
    }

    static get ROBOTSTXT_PATH() {
        return path.join(this.BUILD_PATH, 'robots.txt')
    }

    static get INDEXHTML_PATH() {
        return path.join(this.BUILD_PATH, 'index.html.gz')
    }

    static get VIEWS_FOLDER_PATH() {
        return path.join(this.SERVER_PATH, 'views')
    }

}

module.exports = Path
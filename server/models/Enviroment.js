const path = require('path');

class Enviroment {
    static getValue(key) {
        return process.env[key];
    }

    static getBoolean(key) {
        let strBool = process.env[key];
        return (strBool === 'true');
    }

    static isBoolean(key) {
        let strBool = process.env[key];
        return (strBool === 'true' || strBool === 'false')
    }

    static compare(key, value) {
        if (this.isBoolean(key)) {
            if (this.getBoolean(key) === value) return true
            return false
        } else {
            // is string
            if (this.getValue(key) === value) return true
            return false
        }
    }

    static isProd() {
        if (this.compare('NODE_ENV', 'production')) return true
        return false
    }

    static isDev() {
        if (this.compare('NODE_ENV', 'development')) return true
        return false
    }

    static getPort() {
        return this.getValue('PORT') || 8080
    }

    static initialize() {
        require('dotenv').config({ path: path.join(process.cwd(), '.env.common') });
        if (this.isDev()) {
            require('dotenv').config({ path: path.join(process.cwd(), '.env.dev') });
        }
    }
}

module.exports = Enviroment;
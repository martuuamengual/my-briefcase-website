const UndefinedUtils = require('./UndefinedUtils')


class NumberUtils {

    static isNaN(value) {
        return Number.isNaN(value)
    }

    static isNotNaN(value) {
        return !this.isNaN(value)
    }

    static isInteger(value) {
        return (this.isNotNaN(value) && typeof value === 'number')
    }

    static isNotInteger(value) {
        return !this.isInteger(value)
    }

}

module.exports = NumberUtils
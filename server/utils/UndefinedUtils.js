

class UndefinedUtils {

    static isUndefined(value) {
        return (value === undefined)
    }

    static isNotUndefined(value) {
        return !this.isUndefined(value)
    }

    static isNaN(value) {
        return (isNaN(value))
    }

    static isNotNaN(value) {
        return !this.isNaN(value)
    }

    static isNull(value) {
        return (value === null)
    }

    static isNotNull(value) {
        return !this.isNull(value)
    }

}

module.exports = UndefinedUtils
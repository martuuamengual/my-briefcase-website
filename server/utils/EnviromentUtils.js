

class EnviromentUtils {
    static getValue(value) {
        return process.env[value];
    }

    static getBoolean(value) {
        let strBool = process.env[value];
        return (strBool === 'true');
    }

    static isBoolean(value) {
        let strBool = process.env[value];
        return (strBool === 'true' || strBool === 'false')
    }

    static compare(value, second) {
        if (this.isBoolean(value)) {
            if (this.getBoolean(value) === second) {
                return true;
            } else {
                return false;
            }
        } else {
            // is string
            if (this.getValue(value) === second) {
                return true;
            } else {
                return false;
            }
        }
    }
}

module.exports = EnviromentUtils;
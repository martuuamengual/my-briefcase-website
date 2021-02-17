

class StringUtils {

    static isString(value) {
        if (typeof value === 'string') {
            return true;
        }
        return false
    }

    static isValidString(value) {
        if (value !== undefined && this.isString(value)) {
            return true;
        }
        return false;
    }

    static format(value, ...values) {
        for (let k in values) {
            value = value.replace("{" + k + "}", values[k])
        }
        return value;
    }

}

export default StringUtils;


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

    static isValidField(value) {
        if (value !== undefined && this.isString(value) && value.length > 0) {
            return true;
        }
        return false;
    }

    static areValidFields(...values) {
        let valid = true;
        for (let k in values) {
            let value = values[k];
            if (!this.isValidField(value)) {
                valid = false;
            }
        }
        return valid;
    }

    static format(value, ...values) {
        for (let k in values) {
            value = value.replace("{" + k + "}", values[k])
        }
        return value;
    }

}

export default StringUtils;
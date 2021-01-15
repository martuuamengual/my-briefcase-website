

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

}

export default StringUtils;


class StringUtils {

    static format(value, ...values) {
        for (let k in values) {
            value = value.replace("{" + k + "}", values[k])
        }
        return value;
    }

}

module.exports = StringUtils;
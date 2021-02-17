

export default class EnviromentUtils {
    static getValue(value) {
        return process.env[value];
    }

    static getBoolean(value) {
        let strBool = process.env[value];
        return (strBool === 'true');
    }
}
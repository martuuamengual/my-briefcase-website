export default class FormUtils {

    static validate(data) {
        if (data.hasToValidate) {
            if (data.errors[data.name] !== undefined) {
                return 'is-invalid'
            } else {
                return 'is-valid'
            }
        } else {
            return ''
        }
    }

    static mergeClassName(data) {
        return (data.className == undefined ? data.default : data.default + " " + data.className)
    }

    static mergeClassNameWithValidation(data) {
        return this.mergeClassName(data) + " " + this.validate(data)
    }
}
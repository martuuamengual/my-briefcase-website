import EnviromentUtils from 'src/utils/EnviromentUtils'

export default class UrlUtils {

    static getCurrentUrl() {
        return EnviromentUtils.getValue('PROTOCOL') + '://' + EnviromentUtils.getValue('API_URL')
    }
}
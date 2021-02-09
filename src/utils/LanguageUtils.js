
class LanguageUtils {

    static getContent(language, content) {
        if (typeof language === 'string') {
            if (content instanceof Object && language in content) {
                return content[language];
            }
        }
        return undefined;
    }

}

export default LanguageUtils;
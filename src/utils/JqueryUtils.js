import $ from 'jquery';

class JqueryUtils {

    static isInViewport(element) {
        var top_of_element = element.offset().top;
        var bottom_of_element = element.offset().top + element.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            return true;
        } else {
            return false;
        }
    }

    static isScrollInBottom() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            return true;
        } else {
            return false;
        }
    }

}

export default JqueryUtils;
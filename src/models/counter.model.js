
class CounterModel extends Object {
    #_value;

    constructor() {
        super();
        this.#_value = 0;
    }

    get value() {
        return this.#_value;
    };

    set value(value) {
        this.#_value = value;
    };
}

export default CounterModel;
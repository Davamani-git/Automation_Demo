class TestContext {

    constructor() {
        this.clear();
    }

    /**
     * Store value
     */
    set(key, value) {
        this.data[key] = value;
    }

    /**
     * Retrieve value
     */
    get(key) {
        return this.data[key];
    }

    /**
     * Check existence
     */
    has(key) {
        return Object.prototype.hasOwnProperty.call(this.data, key);
    }

    /**
     * Remove value
     */
    remove(key) {
        delete this.data[key];
    }

    /**
     * Clear context
     */
    clear() {
        this.data = {};
    }

}

module.exports = new TestContext();
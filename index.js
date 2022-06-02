class RexarTools{
    constructor(){

    }
    /**
     * 
     * @param {any} val 
     * @returns {boolean}
     */
    isBoolean(val){
        return typeof val === "boolean"
    }
    /**
     * 
     * @param {any} val 
     * @returns {boolean}
     */
    isDate(val){
        return val instanceof Date
    }
    /**
     * @param {any} val
     * @returns {boolean}
     */
    isString(val){
        return typeof val === "string"
    }
    /**
     * 
     * @param {any} val 
     * @returns {boolean}
     */
    isRegex(val){
        return val instanceof RegExp
    }
    /**
     * 
     * @param {any} val 
     * @returns {boolean}
     */
    booleanify(val){
        return this.isBoolean(val) ? val : Boolean(val)
    }
    /**
     * 
     * @param {any} val 
     * @returns {RegExp}
     */
    regexify(val){
        return RegExp(val)
    }
    /**
     * 
     * @param {number} ms 
     * @returns {Promise<any>}
     */
    async wait(ms){
        return await new Promise((resolve) => setTimeout(resolve, ms))
    }
    /**
     * 
     * @param {string | number | Date} val 
     * @returns {Date<any>}
     */
    dateify(val){
        return this.isDate(val) ? val : new Date(val)
    }
    /**
     * 
     * @param {any} val 
     * @returns {string}
     */
    stringify(val){
        return this.isString(val) ? val : String(val)
    }
}



module.exports = new RexarTools()
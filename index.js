const axios = require("axios").default



class RexarTools{
    constructor(){

    }
    /**
     * 
     * @param {any} val 
     * @returns {boolean}
     */
    isBigInt(val){
        return typeof val === "bigint"
    }
    /**
     * 
     * @param {any} val 
     * @returns {boolean}
     */
    isNumber(val){
        return typeof val === "number"
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
    /**
     * 
     * @param {string} pkgName 
     * @returns {import("./typings/Types").NPMReturns}
     */
    async npm(pkgName){
        const resp = await axios.request({
            url: "https://registry.npmjs.com/" + pkgName
        })
        const data = resp.data
        const v = data["dist-tags"].latest
        return {
            name: data.name,
            version: v,
            description: data.versions[v].description,
            keywords: data.versions[v].keywords,
            createdDate: data.time.created,
            modifiedDate: data.time.modified,
            repository: data.versions[v].repository,
            bugs: data.versions[v].bugs,
            homepage: data.versions[v].homepage,
            author: data.versions[v].author.name,
            license: data.versions[v].license
        }
    }
    /**
     * 
     * @param {any} val 
     * @returns {number}
     */
    numberify(val){
        return this.isNumber(val) ? val : Number(val)
    }
    /**
     * 
     * @param {string | number | bigint | boolean} val 
     * @returns {bigint}
     */
    bigingify(val){
        return this.isBigInt(val) ? val : BigInt(val)
    }
    /**
     * @returns {string}
     */
    getDayWithText(){
        var days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]

        return days[new Date().getDay()]
    }
    /**
     * @returns {string}
     */
     getMonthWithText(){
        var months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]

        return months[new Date().getMonth()]
    }
    /**
     * @param {any} val
     * @returns {any[]} 
     */
    arrayify(val){
        return !Array.isArray(val) ? [val] : val
    }
    isObject(val){
        return typeof val === "object"
    }
    getWeek(){
        return parseInt(new Date().getMonth() / 4)
    }
    getUTCWeek(){
        return parseInt(new Date().getUTCMonth() / 4)
    }
    /**
     * 
     * @param {string} pkgName 
     * @returns {import("./typings/Types").YarnReturns}
     */
    async yarn(pkgName){
        const resp = await axios.request({
            url: "https://registry.yarnpkg.com/" + pkgName
        })
        const data = resp.data
        const v = data["dist-tags"].latest
        return {
            name: data.name,
            version: v,
            description: data.versions[v].description,
            keywords: data.versions[v].keywords,
            createdDate: data.time.created,
            modifiedDate: data.time.modified,
            repository: data.versions[v].repository,
            bugs: data.versions[v].bugs,
            homepage: data.versions[v].homepage,
            author: data.versions[v].author.name,
            license: data.versions[v].license
        }
    }
}



module.exports = new RexarTools()

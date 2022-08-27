declare module "rexar-tools"{
    export type NPMReturns = {
        name: string
        version: string
        description: string
        keywords: Array<string>
        createdDate: string
        modifiedDate: string
        repository: {
            url: string
            type: string
            directory: string
        }
        bugs: {
            url: string
        }
        author: string
        homepage: string
        license: string
    }
    export type YarnReturns = {
        name: string
        version: string
        description: string
        keywords: Array<string>
        createdDate: string
        modifiedDate: string
        repository: {
            url: string | undefined
            type: string | undefined
            directory: string | undefined
        }
        bugs: {
            url: string | undefined
        }
        homepage: string
        author: string | undefined
        license: string
    }
    class RexarTools{
    isBigInt(val: any): boolean
    isNumber(val: any): boolean
    isBoolean(val: any): boolean
    isDate(val: any): boolean
    isString(val: any): boolean
    isRegex(val: any): boolean
    booleanify(val: any): boolean
    regexify(val: any): RegExp
    wait(ms: number): Promise<any>
    dateify(val: any): Date
    stringify(val: any): string
    npm(pkgName: string): Promise<NPMReturns>
    numberify(val: any): number
    bigingify(val: any): bigint
    getDayWithText(): string
    getMonthWithText(): string
    arrayify(val: any): Array<any>
    isObject(val: any): object
    getWeek(): Date
    getUTCWeek(): Date
    yarn(pkgName: string): Promise<YarnReturns>
    }
    export default new RexarTools()
}

# Rexar-Tools

Some Useful Functions.

# How to Install
### npm:
`npm i rexar-tools`
### yarn:
`yarn add rexar-tools`

# 2.5.0 news:
- added TypeScript support.


# Functions
### Importing Module
CommonJS:
```js
const RTools = require("rexar-tools")
```
ESModule:
```mjs
import RTools from "rexar-tools"
```
TypeScript:
```ts
import RTools from "rexar-tools"
```
```js
//Type Methods
RTools.numberify("123")//Returns 123
RTools.stringify(123)//Returns "123"
RTools.dateify("2022-06-02")// Returns 2022-06-02T00:00:00.000Z
RTools.regexify(" ")//Returns / /
RTools.booleanify(1)//Returns true
RTools.bigintify(123)//Returns 123n
RTools.arrayify("foo bar")//Returns [ "foo bar" ]

RTools.isNumber("123")//Returns false
RTools.isNumber(RTools.numberify("123"))//Returns true
RTools.isString(123)//Returns false
RTools.isString(RTools.stringify(123))//Returns true
RTools.isDate("foo bar")//Returns false
RTools.isDate(RTools.dateify("2022-06-02"))//Returns true
RTools.isRegex(1221)//Returns false
RTools.isRegex(RTools.regexify(" "))//Returns true
RTools.isBoolean(5412)//Returns false
RTools.isBoolean(RTools.booleanify(1))//Returns true
RTools.isBigInt(512)//Returns false
RTools.isBigInt(RTools.bigintify(1))//Returns true
RTools.isObject(31)//Returns false
RTools.isObject({
    foo: "bar"
})//Returns true


//Date Methods
RTools.getDayWithText()//Returns What Today Is From Days
RTools.getMonthWithText()//Returns What ToMonth Is From Months
RTools.getWeek()//Returns What Week We Are.
RTools.getUTCWeek()//Returns the UTC Week We Are.

//Time Methods
await RTools.wait(1000)//If Used Inside a Function, Makes the Function Wait for Specified Time.
//or
RTools.wait(1000).then(v => v)//If Used Inside a Function, Makes the Function Wait for Specified Time.


//Request Methods
await RTools.npm("rexar-tools")//Assigns the data of the specified NPM package.
//or
RTools.npm("rexar-tools").then(v => v)//Assigns the data of the specified NPM package.
await RTools.yarn("rexar-tools")//Assigns the data of the specified Yarn package.
//or
RTools.yarn("rexar-tools").then(v => v)//Assigns the data of the specified Yarn package.
```

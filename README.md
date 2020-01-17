[![texthelper1](https://raw.githubusercontent.com/korpozim/texthelper1/master/logo.png)](https://github.com/korpozim/texthelper1)

# texthelper1

Simple text helper library for javascript.

[![npm version](https://badge.fury.io/js/texthelper1.svg)](https://www.npmjs.com/package/texthelper1)
[![Build Status](https://travis-ci.com/korpozim/texthelper1.svg?branch=master)](https://travis-ci.com/korpozim/texthelper1)

### Install texthelper1

```
npm install --save texthelper1
```

### Using texthelper1

```javascript
const helper = require("texthelper1");

let text = "asd dsa";

console.log(helper.endpoint(text));   // asd dsa.
console.log(helper.firstup(text));   // Asd dsa
console.log(helper.wordsfirstup(text));   // Asd Dsa
console.log(helper.upper(text));   // ASD DSA
console.log(helper.lower(text));   // asd dsa
console.log(helper.doublequotes(text));   // "asd dsa"
console.log(helper.singlequotes(text));   // 'asd dsa'
console.log(helper.brackets(text));   // (asd dsa)
console.log(helper.blabla(text));   // asd dsa...
console.log(helper.camelcase(text));   // asdDsa
console.log(helper.pascalcase(text));   // AsdDsa
console.log(helper.snakecase(text));   // asd_dsa
console.log(helper.kebabcase(text));   // asd-dsa
console.log(helper.trim(text));   // asd dsa
console.log(helper.reverse(text));   // asd dsa
console.log(helper.removenumber(text));   // asd dsa
console.log(helper.removespace(text));   // asddsa
console.log(helper.password(text));   // *******
console.log(helper.reset(text));   // 

console.log(helper.getlength(text));   // 7

console.log(helper.isstring(text));   // true
console.log(helper.isurl(text));   // false
console.log(helper.isnullorempty(text));   // false
```
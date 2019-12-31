[![npm version](https://badge.fury.io/js/texthelper1.svg)](https://www.npmjs.com/package/texthelper1)
[![Build Status](https://travis-ci.com/korpozim/texthelper1.svg?branch=master)](https://travis-ci.com/korpozim/texthelper1)

# texthelper1

### Install texthelper1

```
npm install --save texthelper1
```

### Using texthelper1

```javascript
const helper = require("texthelper1");

let text = "asd";

console.log(helper.endpoint(text));  // asd.
console.log(helper.firstup(text));   // Asd
```

### Test

```
npm test
```
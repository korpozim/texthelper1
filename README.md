[![texthelper1](https://raw.githubusercontent.com/korpozim/texthelper1/master/logo.png)](https://github.com/korpozim/texthelper1)

# texthelper1

Simple text helper library for javascript.

[![npm version](https://badge.fury.io/js/texthelper1.svg)](https://www.npmjs.com/package/texthelper1)
[![Build Status](https://travis-ci.com/korpozim/texthelper1.svg?branch=master)](https://travis-ci.com/korpozim/texthelper1)
[![codecov](https://codecov.io/gh/korpozim/texthelper1/branch/master/graph/badge.svg)](https://codecov.io/gh/korpozim/texthelper1)

### Install texthelper1

```
npm install --save texthelper1
```

### Using texthelper1

```javascript
// ES6
import * as texthelper from 'texthelper1';

// ES5
const texthelper = require('texthelper1');

const text = 'asd dsa';

// General
texthelper.firstup(text);         // Asd dsa
texthelper.wordsfirstup(text);    // Asd Dsa
texthelper.upper(text);           // ASD DSA
texthelper.lower(text);           // asd dsa
texthelper.doublequotes(text);    // "asd dsa"
texthelper.singlequotes(text);    // 'asd dsa'
texthelper.camelcase(text);       // asdDsa
texthelper.pascalcase(text);      // AsdDsa
texthelper.snakecase(text);       // asd_dsa
texthelper.kebabcase(text);       // asd-dsa
texthelper.reverse(text);         // asd dsa
texthelper.removenumber(text);    // asd dsa
texthelper.removespace(text);     // asddsa

// Punctuation marks
texthelper.endpoint(text);        // asd dsa.
texthelper.question(text);        // asd dsa?
texthelper.exclamation(text);     // asd dsa!
texthelper.blabla(text);          // asd dsa...

// Brackets
texthelper.brackets(text);        // [asd dsa]
texthelper.parentheses(text);     // (asd dsa)
texthelper.braces(text);          // {asd dsa}
texthelper.anglebrackets(text);   // <asd dsa>

// Validator
texthelper.isstring(text);        // true
texthelper.isurl(text);           // false
texthelper.isnullorempty(text);   // false

// Miscellaneous
texthelper.password(text);        // *******
texthelper.reset(text);           // 
texthelper.getlength(text);       // 7
texthelper.trim(text);            // asd dsa
```

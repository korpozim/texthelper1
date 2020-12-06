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
import 'texthelper1';

// ES5
require('texthelper1');

const text = 'asd dsa';

// General
text.firstup();         // Asd dsa
text.wordsfirstup();    // Asd Dsa
text.doublequotes();    // "asd dsa"
text.singlequotes();    // 'asd dsa'
text.camelcase();       // asdDsa
text.pascalcase();      // AsdDsa
text.snakecase();       // asd_dsa
text.kebabcase();       // asd-dsa
text.reverse();         // asd dsa
text.removenumber();    // asd dsa
text.removespace();     // asddsa

// Punctuation marks
text.endpoint();        // asd dsa.
text.question();        // asd dsa?
text.exclamation();     // asd dsa!
text.blabla();          // asd dsa...

// Brackets
text.brackets();        // [asd dsa]
text.parentheses();     // (asd dsa)
text.braces();          // {asd dsa}
text.anglebrackets();   // <asd dsa>

// Validator
text.isurl();           // false
text.isnullorempty();   // false

// Miscellaneous
text.password();        // *******
text.reset();           // 
```

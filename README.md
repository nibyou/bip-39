# bip-39-de

German Mnemonic list, basically a collection of 2048 German nouns in an array.

# Installation
Install the package with `npm`

```
$ npm i --save bip-39-de
```


# Usage

Import/Require it in you code:

```javascript
const bip39de = require("bip-39-de");
```

And finally, access the array inside:

```javascript
let code = [0x7ff, 0x034, 0x2d1, 0x607, 0x08b, 0x1cc];
let mnemonic = code.map(hex => bip39de[hex]);
// => [ 'zylinder', 'altertum', 'gitarre', 'roggen', 'asteroid', 'eiszeit' ]
```

# License

[CC-BY-SA-4.0](/LICENSE)

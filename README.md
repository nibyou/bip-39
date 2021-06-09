# bip-39-de
From the Bitcoin Improvement Proposal 39 (https://en.bitcoin.it/wiki/BIP_0039) (bitcoin/bips)

German Mnemonic list, basically a collection of 2048 German nouns in an array.

In Bitcoin, lists like these are used to generate IDs for Wallets that humans can more easily remember than just a bunch of numbers.
At Nibyou, we use the BIP-39 representation of random bytes to generate recovery passwords in human readable form (example below)

# Installation
Install the package with `npm`

```
$ npm i --save bip-39-de
```


# Usage

Import/Require it in you code:

```javascript
const bip39de = require("bip-39-de");
// or in typescript
import bip39de from "bip-39-de"
```

And finally, access the array inside:

```javascript
let code = [0x7ff, 0x034, 0x2d1, 0x607, 0x08b, 0x1cc]
let mnemonic = code.map(hex => bip39de[hex])
// => [ 'zylinder', 'altertum', 'gitarre', 'roggen', 'asteroid', 'eiszeit' ]
```

# License

[CC-BY-SA-4.0](/LICENSE)

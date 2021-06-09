# @nibyou/bip39
From the Bitcoin Improvement Proposal 39 (https://en.bitcoin.it/wiki/BIP_0039) (bitcoin/bips)

Mnemonic lists, basically a collection of 2048 nouns in different languages in an array.

In Bitcoin, lists like these are used to generate IDs for Wallets that humans can more easily remember than just a bunch of numbers.
At Nibyou, we use the BIP-39 representation of random bytes to generate recovery passwords in human readable form (example below)

The following languages are currently supported:

| Language            | Language Code |
|---------------------|---------------|
| German              | de_DE         |
| English             | en_US         |
| Spanish             | es_ES         |
| French              | fr_FR         |
| Italian             | it_IT         |
| Japanese            | ja_JP         |
| Korean              | ko_KP         |
| Portugese           | pt_PT         |
| Simplified Chinese  | zh_CN         |
| Traditional Chinese | zh_TW         |

# Installation
Install the package with `npm`

```
$ npm i --save @nibyou/bip39
```


# Usage

Import/Require it in you code:

```javascript
const bip39 = require("@nibyou/bip39");
// or in typescript
import bip39 from "@nibyou/bip39"
```

And finally, access the array inside:

```javascript
let code = [0x7ff, 0x034, 0x2d1, 0x607, 0x08b, 0x1cc]
let mnemonic = code.map(hex => bip39.de_DE[hex])
// => [ 'zylinder', 'altertum', 'gitarre', 'roggen', 'asteroid', 'eiszeit' ]
```

# License

[CC-BY-SA-4.0](/LICENSE)

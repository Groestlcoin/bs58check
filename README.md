# bs58check-grs

A straight forward implementation of base58check extending upon bs58.


## Example

```javascript
var bs58check = require('bs58check-grs')

var decoded = bs58check.decode('5KNSiE1em23byTDTToLyd6aBbqKdSZsvG4iQkMwYuxvc7MeHSke')

console.log(decoded)
// => <Buffer 80 cc b6 a4 01 f2 5a 90 59 8e 85 16 3f fd 1b 29 67 2f a8 59 1b da ef 18 a3 4f f1 e8 eb 8b 75 98 de>

console.log(bs58check.encode(decoded))
// => 5KNSiE1em23byTDTToLyd6aBbqKdSZsvG4iQkMwYuxvc7MeHSke
```


## LICENSE [MIT](LICENSE)

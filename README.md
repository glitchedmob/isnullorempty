# isNullOrEmpty

> returns true of a given value is null or empty

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i --save @glitchedmob/isnullorempty
```

## Usage

```js
import { isNullOrEmpty, isNullOrWhiteSpace } from '@glitchedmob/isnullorempty';

isNullOrEmpty('')
//=> true
isNullOrEmpty('test')
//=> false
isNullOrEmpty(null)
//=> true
isNullOrEmpty(undefined)
//=> true
isNullOrEmpty(true)
//=> false
isNullOrEmpty(false)
//=> false
isNullOrEmpty(0)
//=> false
isNullOrEmpty(1)
//=> false
isNullOrEmpty(2)
//=> false
isNullOrEmpty(NaN)
//=> true
isNullOrEmpty(Infinity)
//=> false
isNullOrEmpty({})
//=> true
isNullOrEmpty({ key: 'value' })
//=> false
isNullOrEmpty([])
//=> true
isNullOrEmpty([1, 2])
//=> false
isNullOrEmpty(new Date())
//=> false
isNullOrWhiteSpace('')
//=> true
isNullOrWhiteSpace('   ')
//=> true
isNullOrWhiteSpace('test')
//=> false
isNullOrWhiteSpace('  test  ')
//=> false
```

There is also "Not" versions of each of the functions that check for the inverse
```js
import { isNotNullOrEmpty, isNotNullOrWhiteSpace } from '@glitchedmob/isnullorempty';

isNotNullOrEmpty('')
//=> false
isNotNullOrEmpty('test')
//=> true
isNotNullOrEmpty(null)
//=> false
isNotNullOrEmpty(undefined)
//=> false
isNotNullOrEmpty(true)
//=> true
isNotNullOrEmpty(false)
//=> true
isNotNullOrEmpty(0)
//=> true
isNotNullOrEmpty(1)
//=> true
isNotNullOrEmpty(2)
//=> true
isNotNullOrEmpty(NaN)
//=> false
isNotNullOrEmpty(Infinity)
//=> true
isNotNullOrEmpty({})
//=> false
isNotNullOrEmpty({ key: 'value' })
//=> true
isNotNullOrEmpty([])
//=> false
isNotNullOrEmpty([1, 2])
//=> true
isNotNullOrEmpty(new Date())
//=> true
isNotNullOrWhiteSpace('')
//=> false
isNotNullOrWhiteSpace('   ')
//=> false
isNotNullOrWhiteSpace('test')
//=> true
isNotNullOrWhiteSpace('  test  ')
//=> true
```

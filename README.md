# isNullOrEmpty

> returns true of a given value is null or empty

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i --save @glitchedmob/isnullorempty
```

## Usage

```js
import { isNullOrEmpty } from '@glitchedmob/isnullorempty';

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
```
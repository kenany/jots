# jots

String similarity scoring as used in
[Jotto](https://en.wikipedia.org/wiki/Jotto).

## Example

``` javascript
var jots = require('jots');

jots('bread', 'beard');
// => 5
```

## Installation

``` bash
$ npm install jots
```

## API

``` javascript
var jots = require('jots');
```

### `jots(correct, guess)`

Returns how many characters _String_ `guess` has in common with _String_
`correct`. **Assumes that `guess`
[does not have any repeating letters](https://github.com/KenanY/no-repeated-letters),
otherwise this will happen:**

``` javascript
jots('bread', 'eeeee');
// => 5
```

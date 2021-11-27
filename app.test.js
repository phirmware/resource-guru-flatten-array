/**
 * Run node app.test.js
 */
const assert = require('assert')
const { flattenArray } = require('./app')

assert.deepEqual(
  flattenArray([1,2,[3,[4,5,[6]],7],8]),
  [1,2,3,4,5,6,7,8],
  'should flatten array accordingly'
)

assert.deepEqual(
  flattenArray([1,2,3,4,5,6,7,8]),
  [1,2,3,4,5,6,7,8],
  'should return original array if no deep array'
)

assert.deepEqual(
  flattenArray([1,2,'a','b',4,5,['a',2]]),
  [1,2,'a','b',4,5,'a',2],
  'should handle other types apart from number'
)

assert.deepEqual(
  flattenArray([1,2,[],4,5,6,7,8]),
  [1,2,4,5,6,7,8],
  'should handle empty array input'
)

assert.deepEqual(
  flattenArray([1,2,[[[]]],3,4,5]),
  [1,2,3,4,5],
  'should handle deep empty arrays'
)

assert.deepEqual(
  flattenArray([
    { a: 'a', b: 'b' },
    [ { c: 'c', d: 'd' }, { d: 'd', e: 'e' } ],
    { f: 'f' }
  ]),
  [
    { a: 'a', b: 'b' },
    { c: 'c', d: 'd' },
    { d: 'd', e: 'e' },
    { f: 'f' }
  ],
  'should also work for objects'
)

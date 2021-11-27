module.exports = {
  flattenArray
}

function flattenArray (arr = []) {
  const accumulator = []
  flatten(arr, accumulator)
  return accumulator
}

function flatten (arr = [], accumulator = []) {
  arr.forEach(value => {
    if (Array.isArray(value)) flatten(value, accumulator)
    else accumulator.push(value)
  })
}

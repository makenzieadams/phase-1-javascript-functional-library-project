/* myEach:
1. calls alert with each element passed
2. calls alert properly on object values
3. returns the original collection */

function myEach(collection, cb) {
  let loopable = collection;
  if (!(collection instanceof Array)) {
    loopable = Object.values(collection);
  }

  for (let i = 0; i < loopable.length; i++) {
    cb(loopable[i]);
  }
  return collection;
}

/* myMap
1. successfully return a correctly populated array
2. successfully returns a correctly populated array from modified object values
*/

function myMap(collection, cb) {
  let loopable = collection;
  if (!(collection instanceof Array)) {
    loopable = Object.values(collection);
  }
  let arrayTwo = [];
  for (let i = 0; i < loopable.length; i++) {
    let newer = cb(loopable[i]);
    arrayTwo.push(newer);
  }
  return arrayTwo;
}

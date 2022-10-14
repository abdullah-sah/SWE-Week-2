/**
 * Return true if the arrays contain the same elements in the same order, else false
 * e.g. ([1, 2], [1, 2]) => true
 * e.g. ([1, 2], [2, 1]) => false
 * e.g. ([1,2], [2,3]) => false
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {any[]}
 */

function arraySameOrdered(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    arr1.forEach((val, i) => {
      if (Number(val) !== Number(arr2[i])) {
        return false;
      }
    });
    return true;
  }
}
console.log(arraySameOrdered([1, 2, 4], [1, 2, 3]));
// arraySameOrdered([1, 2, 4, 3], [1, 2, 4, 5]);

module.exports = { arraySameOrdered };


// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix && matrix.length !== 0) {
    matrix.map((item, index) => (index %2 !== 0) ? item.reverse(): item).
			     forEach(function (item) {return result.push(...item)});
  }
  return result;
}

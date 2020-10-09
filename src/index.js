
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix && Array.isArray(matrix)) {
      result = matrix.map((arr, ind) => ind % 2 === 0 ? arr : arr.reverse()).flat();
  }
  return result;
}

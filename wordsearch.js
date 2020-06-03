const transpose = function (matrix) {
  let newMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!newMatrix[j]) {
        newMatrix[j] = [];
      }
      newMatrix[j].push(matrix[i][j]);
    }
  }
  return newMatrix;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0 || !word) return false;
  let reverseWord = word.split('').reverse().join('');
  const horizontalJoin = letters.map((ls) => ls.join(''));

  for (const line of horizontalJoin) {
    if (line.includes(word) || line.includes(reverseWord)) return true;
  }

  const transposeMatrix = transpose(letters);
  const verticalJoin = transposeMatrix.map((ls) => ls.join(''));

  for (const line of verticalJoin) {
    if (line.includes(word) || line.includes(reverseWord)) return true;
  }
  return false;
};

let result = wordSearch(
  [
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
  ],
  'SEINFELD'
);

console.log(result);

module.exports = wordSearch;

const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe('#wordSearch()', function () {
  it('should return false if the word is not present', function () {
    const result = wordSearch(
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
      'FRANK'
    );

    assert.isFalse(result);
  });

  it('should return true if the word is present', function () {
    const result = wordSearch(
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

    assert.isTrue(result);
  });

  it('should return true if the word is present vertically', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'S', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'A', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['H', 'N', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'D', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'E', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'P', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
      ],
      'SANDEEP'
    );

    assert.isTrue(result);
  });

  it('should return true if the word is present vertically in reverse', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'X', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'P', 'E', 'E', 'D', 'N', 'A', 'S'],
        ['H', 'Z', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'N', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'D', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'P', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
      ],
      'SANDEEP'
    );

    assert.isTrue(result);
  });

  it('should return true if the word is present horizantly in reverse', function () {
    const result = wordSearch(
      [
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'X', 'I', 'N', 'P', 'E', 'L', 'D'],
        ['Y', 'X', 'Y', 'Z', 'E', 'Z', 'E', 'D'],
        ['H', 'Z', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'N', 'C', 'S', 'D', 'E', 'R', 'L'],
        ['B', 'D', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'E', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'P', 'C', 'A', 'S', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
      ],
      'SANDEEP'
    );

    assert.isTrue(result);
  });

  it('should return false if input 2d array for letters is empty ', function () {
    const result = wordSearch([], 'garbase');

    assert.isFalse(result);
  });

  it('should return false if the input word is not passed', function () {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D']
    ]);

    assert.isFalse(result);
  });
});

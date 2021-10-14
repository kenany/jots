/**
 * @param {string} correct
 * @param {string} guess
 * @returns {number}
 */
function jots(correct, guess) {
  var score = 0;
  for (var i = 0, length = guess.length; i < length; i++) {
    for (var j = 0; j < length; j++) {
      if (correct.charAt(j) === guess.charAt(i)) {
        score++;
      }
    }
  }
  return score;
}

module.exports = jots;

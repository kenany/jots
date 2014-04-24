var contains = require('lodash.contains');

function jots(correct, guess) {
  var score = 0;
  for (var i = 0, length = guess.length; i < length; i++) {
    if (contains(correct, guess.charAt(i))) {
      score++;
    }
  }
  return score;
}

module.exports = jots;
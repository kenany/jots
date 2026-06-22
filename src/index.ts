/**
 * Calculates string similarity as used in Jotto. Returns how many characters in
 * `guess` appear anywhere in `correct`. Assumes that `guess` does not have any
 * repeating letters, otherwise the score will be inflated.
 *
 * @param correct The target word to compare against
 * @param guess The guessed word to score
 * @returns The number of characters in `guess` that appear in `correct`
 */
export function jots(correct: string, guess: string): number {
  let score = 0;
  for (let i = 0, length = guess.length; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (correct.charAt(j) === guess.charAt(i)) {
        score++;
      }
    }
  }
  return score;
}

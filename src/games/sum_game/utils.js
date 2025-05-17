/**
 * Returns a pseudorandom integer between the given bounds, inclusive.
 *
 * @param {number} min - The lower bound (inclusive).
 * @param {number} max - The upper bound (inclusive).
 * @returns {number} A random integer N such that min ≤ N ≤ max.
 */
export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  
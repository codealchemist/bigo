/**
 * Takes an array of numbers and returns the sum of all numbers that are repeated.
 * Big O: O(n^2).
 * 
 * @param {Array} nums 
 * @returns {int} sum
 */
export const sumRepeated = (nums) => {
  let sum = 0
  nums.forEach(num => {
    if (nums.indexOf(num) !== nums.lastIndexOf(num)) sum += num
  })
  return sum
}

/**
 * Takes an array of numbers and returns the sum of all numbers that are repeated.
 * Big O: O(n).
 * 
 * @param {Array} nums 
 * @returns {int} sum
 */
export function sumRepeatedOptimized (nums) {
  const map = {}
  let sum = 0

  nums.forEach(num => {
    if (map[num] === 1) {
      sum += num
      map[num] = 1
    }
    if (map[num] === 0) {
      sum += num * 2
      map[num] = 1
      return
    }
    map[num] = 0
  })

  return sum
}

/**
 * Takes an array of numbers and returns the sum of all numbers that are repeated.
 * Big O: O(n).
 * Technically this is O(2n) but we drop the constant.
 * 
 * @param {Array} nums 
 * @returns {int} sum
 */
export function sumRepeatedOptimized1 (nums) {
  const map = {}
  let sum = 0

  nums.forEach(num => {
    map[num] ??= 0
    map[num] += 1
  })
  nums.forEach(num => {
    if (map[num] > 1) {
      sum += num
    }
  })

  return sum
}

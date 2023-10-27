/**
 * Takes an array of numbers and returns the sum of all numbers that are repeated.
 * 
 * Big O: TODO
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

// Enhanced version.
export const sumRepeatedOptimized = (nums) => {
  // TODO.
}

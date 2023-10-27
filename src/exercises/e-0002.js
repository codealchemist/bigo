/**
 * Receives an array of integers and returns the sum of all unique integers.
 * Big O: O(n^2).
 * 
 * @param {Array} nums 
 * @returns {int} sum
 */
export const sumUnique = (nums) => {
  let sum = 0
  nums.forEach(num => { // O(n)
    if (nums.indexOf(num) === nums.lastIndexOf(num)) sum += num // O(n)
  })
  return sum
}

/**
 * Receives an array of integers and returns the sum of all unique integers.
 * Big O: O(n), but it's actually O(2n) but we drop the constant.
 * 
 * @param {Array} nums 
 * @returns {int} sum
 */
export function sumUniqueOptimized (nums) {
  // Validations.
  if (!nums) throw new Error('nums is required')
  if (!Array.isArray(nums)) throw new Error('nums should be an array')

  const map = {}
  let sum = 0
  
  // Count the number of times each number appears.
  // O(n).
  nums.forEach(num => {
    if (typeof num !== 'number') throw new Error('nums needs to contain numbers')
  
    map[num] ??= 0
    if (map[num] > 1) return
    map[num] += 1
  })
  
  // Sum all unique numbers.
  // O(n) worst case, when all numbers are unique.
  Object.keys(map).forEach(num => {
    const count = map[num]
    if (count > 1) return
    sum += parseInt(num)
  })
  
  return sum
}

/**
 * Receives an array of integers and returns the sum of all unique integers.
 * Big O: O(n).
 * 
 * @param {Array} nums 
 * @returns {int} sum
 */
export function sumUniqueOptimized1 (nums) {
  // Validations.
  if (!nums) throw new Error('nums is required')
  if (!Array.isArray(nums)) throw new Error('nums should be an array')

  const map = {}
  let sum = 0

  nums.forEach(num => {
    if (typeof num !== 'number') throw new Error('nums needs to contain numbers')

    // Init the number in the map if it's not there.
    map[num] ??= 0

    // The number is repeated, so we remove it from the sum.
    // This is because we are doing the sum before we know if the number is repeated.
    // Innocent until proven guilty xD
    // This allows us to have a single loop.
    if (map[num] === 1) {
      sum -= num
      map[num] += 1
      return
    }

    // The number is repeated more than once.
    // We don't need to do anything.
    if (map[num] > 1) {
      return
    }

    // The number is unique so far, so we add it to the sum.
    map[num] += 1
    sum += parseInt(num)
  })
  
  return sum
}

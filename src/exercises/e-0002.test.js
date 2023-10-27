import { sumUnique, sumUniqueOptimized, sumUniqueOptimized1 } from './e-0002'

describe('Exercise 0002, original function', () => {
  test('should return the sum of unique numbers', () => {
    const nums1 = [1, 2, 3, 3, 2]
    const nums2 = [1, 3, 3, 4]
    expect(sumUnique(nums1)).toBe(1)
    expect(sumUnique(nums2)).toBe(5)
  })
})

describe('Exercise 0002, optimized function', () => {
  test('should return the sum of unique numbers', () => {
    const nums1 = [1, 2, 3, 3, 2]
    const nums2 = [2, 2, 3, 3, 2]
    const nums3 = [1, 2, 3, 3, 4]

    expect(sumUniqueOptimized(nums1)).toBe(1)
    expect(sumUniqueOptimized(nums2)).toBe(0)
    expect(sumUniqueOptimized(nums3)).toBe(7)
  })
})

describe('Exercise 0002, optimized function 1', () => {
  test('should return the sum of unique numbers', () => {
    const nums1 = [1, 2, 3, 3, 2]
    const nums2 = [2, 2, 3, 3, 2]
    const nums3 = [1, 2, 3, 3, 4]

    expect(sumUniqueOptimized1(nums1)).toBe(1)
    expect(sumUniqueOptimized1(nums2)).toBe(0)
    expect(sumUniqueOptimized1(nums3)).toBe(7)
  })
})

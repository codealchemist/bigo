import { sumRepeated, sumRepeatedOptimized } from './e-0001'

describe('Exercise 001, original function', () => {
  test('should return the sum of repeated numbers', () => {
    const nums = [1, 2, 3, 3, 2]
    expect(sumRepeated(nums)).toBe(10)
  })
})

describe('Exercise 001, optimized function', () => {
  test('should return the sum of repeated numbers', () => {
    const nums1 = [1, 2, 3, 3, 2]
    const nums2 = [2, 2, 3, 3, 2]

    expect(sumRepeatedOptimized(nums1)).toBe(10)
    expect(sumRepeatedOptimized(nums2)).toBe(12)
  })
})

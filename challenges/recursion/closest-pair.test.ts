import { closestPairDiffNonRecursive, closestPairDiffRecursive } from './closest-pair.js'

const cases: [number | null, number[], number][] = [
  [null, [3], 5],
  [0, [3, 8, 12, 5, 1], 15],
  [1, [2, 9, 14, 7], 20],
  [2, [-10, -5, 0, 5, 10], 3],
  [10, [10, 20, 30, 40, 50], 20],
]

describe('Closest pair difference', () => {
  describe('Non recursive version', () => {
    it.each(cases)('should return %o for array %o and target %i', (expected, array, target) => {
      expect(closestPairDiffNonRecursive(array, target)).toBe(expected)
    })
  })

  describe('Recursive version', () => {
    it.each(cases)('should return %o for array %o and target %i', (expected, array, target) => {
      expect(closestPairDiffRecursive(array, target)).toBe(expected)
    })
  })
})

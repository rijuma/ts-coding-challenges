// English:
//   Given an array of integer numbers, return the closest euclidean distance
//   of the sum of any pair of numbers present in the array.
//   If the array has less than two elements, then return null instead.
//   The idea is to ellaborate two solutions, with and without recursion.
//
// Spanish:
//   Dado un arreglo de números enteros, devuelve el valor de la distancia
//   euclideana más cercana entre el valor buscado [target] y la suma de dos
//   elementos que pertenezcan al arreglo.
//   Si el arreglo provisto tiene menos de dos elementos, devolver null.
//   La idea es elaborar dos soluciones, con y sin recursión.
//
// Examples / Ejemplos:
//   closestPairDiff([3, 8, 12, 5, 1], 15)    -> returns: 0
//   closestPairDiff([2, 9, 14, 7], 20);      -> returns: 1
//   closestPairDiff([-10, -5, 0, 5, 10], 3); -> returns: 2

const getDiff = (a: number, b: number) => Math.abs(b - a)

export const closestPairDiffNonRecursive = (arr: number[], target: number): number | null => {
  if (arr.length < 2) return null

  let minorDiff = getDiff(target, arr[0] + arr[1])

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const diff = getDiff(target, arr[i] + arr[j])
      if (diff < minorDiff) minorDiff = diff
    }
  }

  return minorDiff
}

export const closestPairDiffRecursive = (arr: number[], target: number): number | null => {
  if (arr.length < 2) return null

  let minorDiff = getDiff(target, arr[0] + arr[1])

  const walk = (array: number[]): boolean => {
    const [current, ...rest] = array

    if (!rest.length) return false

    return rest.some((num) => {
      const diff = getDiff(target, current + num)

      if (diff < minorDiff) {
        minorDiff = diff
        if (diff === 0) return true
      }

      return walk(rest)
    })
  }

  walk(arr)

  return minorDiff
}

import { getCodeVariations } from './keypad-combination.js'

// prettier-ignore
const cases: [string, string[]][] = [
  ['8', ['5', '7', '8', '9']],
  ['2', ['0', '1', '2', '3', '5']],
  [
    '20',
    [
      '00', '01', '02', '10', '11', '12', '20','21',
      '22', '30', '31', '32', '50', '51', '52',
    ],
  ],
  [
    '45',
    [
      '12', '14', '15', '16', '18', '42', '44', '45', '46', '48',
      '52', '54', '55', '56', '58', '72', '74', '75', '76', '78',
    ],
  ],
]

describe('Keypad combination', () => {
  it.each(cases)('should input %i should return %o', (input, expected) => {
    expect(getCodeVariations(input)).toBe(expected)
  })
})

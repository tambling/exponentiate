const exponentiate = require('./index.js')

test('returns 1 when the power is 0', () => expect(exponentiate(2, 0)).toBe(1))
test('raises the base to the right power', () => expect(exponentiate(4, 2)).toBe(16))

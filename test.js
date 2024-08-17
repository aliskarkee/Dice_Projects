
const { rollDice } = require('./scripts');

test('rollDice returns a number between 1 and 6 for D6', () => {
    const result = rollDice(6);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
});

test('rollDice returns a number between 1 and 10 for D10', () => {
    const result = rollDice(10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
});

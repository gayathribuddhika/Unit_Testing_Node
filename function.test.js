const functions = require('./function');

test('Add two numbers 2 and 2 equal to 4', () => {
    expect(functions.add(2,2)).toBe(4);
})

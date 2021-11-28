const functions = require('./function');

test('Add two numbers 2 and 2 equal to 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Add two numbers 2 and 2 not equal to 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

test('Should be Null', () => {
    expect(functions.isNull()).toBeNull();
})

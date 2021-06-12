const add = require('../components/add');

/**
 * Unit Test cases for the Add functions
 */

//Passing no values
test('No values passed', () => {
    expect(add()).toBe(0);
});

//Passing 1 value
test('Single value passed', () => {
    const input = 1;
    expect(add(input)).toBe(input);
});

//Passing >1 value
test('More than 1 value passed', () => {
    expect(add(1, 2, 3, 4)).toBe(10);
    expect(add(1, 2, 3, -4)).toBe(2);
    expect(add(1, -2, 3, 4)).toBe(6);
});
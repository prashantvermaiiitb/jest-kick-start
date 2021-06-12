var ObjectTest = require('../components/object');

/**
 * Non-zero age
 */
test('Age to be non-zero', () => {
    const birthYear = new Date().getFullYear();
    expect(ObjectTest.getAge(birthYear)).not.toBe(0);
});
/**
 * Non-Negative age
 */
test('Age to be non-negative', () => {
    const birthYear = new Date().getFullYear();
    expect(ObjectTest.getAge(birthYear)).toBeGreaterThan(0);
});
/**
 * Greater than 10 
 */
test('Age to be greater than 10', () => {
    const birthYear = new Date().getFullYear();
    expect(ObjectTest.getAge(birthYear)).toBeGreaterThan(18);
});

/**
 * Age should not be null
 */
test('Age should not be Undefined', () => {
    expect(ObjectTest.getAge()).toBeUndefined();
})

/**
 * Checking the value of the returned object
 */
test('Check object value', () => {
    expect(ObjectTest.checkValue()).toBeUndefined();
    expect(ObjectTest.checkValue(null)).toBeNull();
});

/**
 * Should return fistName. lastName . age inside as the object properties
 */
test('Should return Object', () => {
    const firstName = 'john', lastName = 'woo';
    expect(ObjectTest.getUser(firstName, lastName)).toEqual({ firstName, lastName });
});
/**
 * Simple null check
 */
test('Null check', () => { expect(ObjectTest.isNull()).toBeNull() })
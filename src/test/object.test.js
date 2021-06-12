var ObjectTest = require('../components/object');

// test('Should be Null');
// test('Should return object');
test('Age to be non-zero', () => {
    const birthYear = new Date().getFullYear();
    expect(ObjectTest.getAge(birthYear)).not.toBe(0);
});
test('Age to be non-negative', () => {
    const birthYear = new Date().getFullYear();
    expect(ObjectTest.getAge(birthYear)).toBeGreaterThan(0);
});
test('Age to be greater than 10', () => {
    const birthYear = new Date().getFullYear();
    expect(ObjectTest.getAge(birthYear)).toBeGreaterThan(18);
});
// test('Age to be non-zero')

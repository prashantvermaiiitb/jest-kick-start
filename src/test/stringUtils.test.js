const stringUtils = require('../components/stringUtils');
describe('String functions', () => {
    const input = 'my name is shiv';
    /**
     * Reversing the string
     */
    test('reverse check', () => {
        expect(stringUtils.reverse(stringUtils.reverse(input))).toEqual(input);
    });

    /**
     * Chunking test for the string
     */
    test('chunking', () => {
        expect(stringUtils.chunking(input, 3)).toEqual([['m', 'y', ' '], ['n', 'a', 'm'], ['e', ' ', 'i'], ['s', ' ', 's'], ['h', 'i', 'v']]);
        expect(stringUtils.chunking(input, 4)).toEqual([['m', 'y', ' ', 'n'], ['a', 'm', 'e', ' '], ['i', 's', ' ', 's'], ['h', 'i', 'v']]);
        expect(stringUtils.chunking(input, 8)).toEqual([['m', 'y', ' ', 'n', 'a', 'm', 'e', ' '], ['i', 's', ' ', 's', 'h', 'i', 'v']]);
    });

    test('checking anagram', () => {
        expect(stringUtils.checkAnagram('racecar', 'carrace')).toBeTruthy();
        expect(stringUtils.checkAnagram('race car', 'car race')).toBeTruthy();
        expect(stringUtils.checkAnagram('race2caR', 'Carrace2')).toBeTruthy();
        expect(stringUtils.checkAnagram('r ace2caR', 'Carrace 2')).toBeTruthy();
    });
});
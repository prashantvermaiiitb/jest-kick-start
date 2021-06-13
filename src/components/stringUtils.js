module.exports = {
    /**
     * Reversing of the string
     * @param {*} str 
     * @returns 
     */
    reverse: (str) => str.split('').reverse().join(''),

    /**
     * Chunking of the string
     * @param {*} str 
     * @param {*} len 
     * @returns 
     */
    chunking: (str, len) => {
        if (len < 0) { return undefined; }
        if (len >= str.length) { return str; }
        let chunkedArray = [], tempLimit = 0, tempChunkedArray;
        str.split('').forEach((value, index) => {
            if (tempLimit < len) {
                tempLimit === 0 && (tempChunkedArray = []);
                tempChunkedArray[tempLimit] = value;
                tempLimit++;
            }
            if (tempLimit === len || (index === str.length - 1)) {
                chunkedArray.push(tempChunkedArray);
                tempLimit = 0;
            }
        });
        return chunkedArray;
    },
    /**
     * Checking anagram or not
     * @param {*} input1 
     * @param {*} input2 
     * @returns 
     */
    checkAnagram: (input1, input2) => {
        let str1 = input1.toLowerCase().split('').sort().join('');
        let str2 = input2.toLowerCase().split('').sort().join('');
        return str1 === str2;
    }
};

/**
 * Adding two different numbers 
 * @param  {...any} a 
 * @returns 
 */
module.exports = function (...a) {

    //* this will never be executed because it will array always
    // if (!Array.isArray(a)) {
    //     return null;
    // }

    // console.log('Type of input ', typeof a, Array.isArray(a)); // object and array

    // length of the input array == 0 
    if (a.length === 0) {
        return 0;
    }

    //Add all the passed numbers
    return a.reduce((accumulator, current) => { return accumulator + current }, 0);
}
/**
 * Object checks 
 */
module.exports = {
    /**
     * Return the value that's returned 
     * @param {*} a 
     * @returns 
     */
    checkValue: (a) => a,

    /**
     * Checking null
     * @param {*} _ 
     * @returns 
     */
    isNull: _ => null,

    /**
     * Getting the User object
     * @param {*} firstName 
     * @param {*} lastName 
     */
    getUser: (firstName, lastName) => { return { firstName, lastName } },

    /**
     * Getting age for the person
     * @param {*} birthYear 
     * @returns 
     */
    getAge: (birthYear) => birthYear && birthYear - 1980 || undefined
};
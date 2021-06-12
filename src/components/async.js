const axios = require('axios');
/**
 * Module for testing async flow 
 */
module.exports = {
    /**
     * Getting sample User with random id
     * @param {*} id 
     * @returns 
     */
    getUser: (id = 1) => {
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.data).catch(err => err);
    },
    /**
     * Getting user with no ID
     * @returns 
     */
    getUsers: () => {
        return axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => response.data).catch(err => err);
    }
}
/**
 * Test case for the User object
 */
const asyncUserOperation = require('../components/async');
describe("Async request and response testing", () => {

    /**
     * Getting the Users from the Network.
     */
    test('Should return users', () => {
        expect.assertions(3);
        return asyncUserOperation.getUsers().then(data => {
            //count of below statements are being used 
            expect(data).not.toBeNull();
            expect(data.length).toBeGreaterThan(0)
            expect(Array.isArray(data)).toBeTruthy();
        }
        );
    });

    /**
     * Getting User with Id
     */
    test('Should return user', async () => {
        expect.assertions(1);
        const data = await asyncUserOperation.getUser(1);
        expect(data.name).toEqual('Leanne Graham');
    });
});

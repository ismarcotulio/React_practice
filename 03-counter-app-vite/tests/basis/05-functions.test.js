import { getActiveUser, getUser } from "../../src/basis/05-functions";

describe('Test in 05-functions', () => { 
    test('getUser must return an object', () => { 

        const testUser = {
            uid: 'ABC24235',
            username: 'tonyStark'
        }

        const user = getUser();

        expect( testUser ).toEqual( user );

     })

     test('getActiveUser must return an object', () => { 

        const name = 'Marco Tulio';

        const testUser = {
            uid: 'ABC63534',
            username: name
        }

        const user = getActiveUser(name);

        expect( testUser ).toEqual( user );

      })
 });
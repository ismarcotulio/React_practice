
import { getGreeting } from '../../src/basis/02-template-string';


describe('Tests in en 02-template-string', () => { 

    test('getGreeting must return "Hello Marco Tulio"', () => {

        const name = 'Marco Tulio';
        const message = getGreeting( name );

        expect( message ).toBe( `Hello ${ name }` )
    });
 })
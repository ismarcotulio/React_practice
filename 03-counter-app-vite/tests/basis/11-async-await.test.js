import { getImage } from "../../src/basis/11-async-await"

describe('Test in 11-async-await', () => {

    test('getImage must return an url image', async() => {
        const url = await getImage();
        console.log(url);
        expect( typeof url ).toBe('string')
    })

})
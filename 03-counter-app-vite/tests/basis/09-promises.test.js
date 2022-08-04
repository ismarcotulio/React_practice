import { getHeroByIdAsync } from "../../src/basis/09-promises";


describe('Tests in 09-promises', () => {

    test('getHeroeByIdAsync must return an hero', (done) => {
        const id = 1;
        getHeroByIdAsync(id)
            .then( hero => {
                expect( hero ).toEqual( 
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    }
                 );
                done();
            });
    });

    test('getHeroeByIdAsync must return an error if hero not exist', (done) => {
        const id = 100;
        getHeroByIdAsync(id)
            .catch( error => {
                expect( error ).toBe( 'Hero not found' )
                done();
            });
    });

});
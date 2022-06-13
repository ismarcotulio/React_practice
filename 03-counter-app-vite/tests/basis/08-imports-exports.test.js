import { getHeroById, getHeroByOwner } from "../../src/basis/08-imports-exports";

describe('Test in 08-imports-exports', () => { 

    test('getHeroById must return a hero by id', () => {
        
        const id = 1;
        const hero = getHeroById( id );

        expect( hero ).toEqual( {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    });

    test('getHeroById must return undefined if hero id doesnt exist.', () => {
        
        const id = 100;
        const hero = getHeroById( id );
        expect( hero ).toBeFalsy();
    });

    test('getHeroByOwner must return an DC heroes array with length === 3.', () => {
        
        const heroesTest = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]
        
        const heroes = getHeroByOwner( 'DC' );

        expect( heroes.length ).toBe( 3 );

        expect( heroesTest ).toEqual( heroes );

    });

    test('getHeroByOwner must return an Marvel heroes array with length === 2.', () => {
        
        const heroesTest =[
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
        ]
        
        const heroes = getHeroByOwner( 'Marvel' );

        expect( heroes.length ).toBe( 2 );

        expect( heroesTest ).toEqual( heroes );

    });
 })
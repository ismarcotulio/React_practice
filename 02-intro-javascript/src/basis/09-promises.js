import {getHeroById} from './basis/08-imports-exports'

const promise = new Promise( (resolve, reject) => {

    setTimeout( () => {

        const hero = getHeroById(2);
        resolve(hero);
        //reject( `Hero ${hero.name} not found` );

    }, 2000)
});

promise.then( (hero) => {
    console.log('Then of the promise', hero);
})
.catch( err => console.warn( err ) );



const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
    
            const hero = getHeroById(id);
            if( hero ){
                resolve(hero);
            }else{
                reject( `Hero not found` );                
            }
    
        }, 2000)
    });
}

getHeroByIdAsync(10)
.then( console.log )
.catch( console.warn )
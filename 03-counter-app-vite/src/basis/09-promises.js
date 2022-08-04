import {getHeroById} from './08-imports-exports'

export const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
    
            const hero = getHeroById(id);
            if( hero ){
                resolve(hero);
            }else{
                reject( `Hero not found` );                
            }
    
        }, 1000)
    });
}
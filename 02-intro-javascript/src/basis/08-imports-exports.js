import heroes, {owners} from '../data/heroes';


// console.log( owners );

// const getHeroById = (id) => {
//     return heroes.find( (hero) => {
//         if( hero.id === id ){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }

const getHeroById = (id) => heroes.find( (hero) => hero.id === id);
// console.log( getHeroById(2) );

const getHeroByOwner = (owner) => heroes.filter( (hero) => hero.owner === owner);

// console.log( getHeroByOwner('DC') )

export{
    getHeroById,
    getHeroByOwner
}
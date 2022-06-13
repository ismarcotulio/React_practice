import heroes, {owners} from '../data/heroes';

const getHeroById = (id) => heroes.find( (hero) => hero.id === id);
const getHeroByOwner = (owner) => heroes.filter( (hero) => hero.owner === owner);

export{
    getHeroById,
    getHeroByOwner
}
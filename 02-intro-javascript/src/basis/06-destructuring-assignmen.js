// Destructuring assignment

const person = {
    name: 'Tony',
    age: 45,
    nick: 'Ironman'
};

//const { name, age, nick } = person;

// console.log( name );
// console.log( age );
// console.log( nick );

const getPerson = ({ name, age, nick }) => {
    //console.log( name, age, nick );

    return {
        nick: nick,
        years: age,
        latlng: {
            lat: 14.6575675,
            lng: -12.65756
        }
    }
};

const { nick, years, latlng:{ lat, lng } } = getPerson(person);

console.log( nick, years, lat, lng );

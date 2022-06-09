

const characters = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = characters;
console.log( p3 );

const returnArray = () => {
    return ['ABC', 123];
}

const [ letters, numbers ] = returnArray();
console.log( letters, numbers );

// Task
// 1. the arr first value ahs to be name.
// 2. the arr second value has to be setName.
// 3. Do destructuring array.

const state = ( value ) => {
    return [value, ()=> {console.log('Hello World')}];
};

const [ name, setName ] = state('Goku');

console.log( name );
setName();

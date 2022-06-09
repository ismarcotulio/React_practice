
// JS functions
// const greet = function( name ) {
//     return `Hi ${ name }`;
// }

const greet2 = ( name ) => {
    return `Hola ${ name }`;
}

const greet3 = ( name ) => `Hola, ${ name }`;
const greet4 = () => 'Hola Mundo';

// console.log( greet1('Vegeta') );

console.log( greet2('Vegeta') );
console.log( greet3('Goku') );
console.log( greet4() );

const getUser = () => ({
    uid: 'ABC24235',
    username: 'tonyStark'
})

console.log( getUser() );

// Homework
// 1. Transform to an arrow function.
// 2. Has to return an implicit object.
// 3. test.

function getActiveUser( name ){
    return {
        uid: 'ABC41212',
        username: name
    }
};

const activeUser = getActiveUser('Marco Tulio');
console.log( activeUser );

const activeUser2 = ( name ) => ({
    uid: 'ABC63534',
    username: name
});

console.log( activeUser2('Marco Tulio Ruiz') )



// JS arrays
// const array1 = new Array( 100 );
const array1 = [1,2,3,4];
// array1.push(1);
// array1.push(2);
// array1.push(3);
// array1.push(4);

let array2 = [ ...array1, 5 ];

const array3 = array2.map(function(number){
    return number * 2;
});

console.log( array1 );
console.log( array2 );
console.log( array3 );

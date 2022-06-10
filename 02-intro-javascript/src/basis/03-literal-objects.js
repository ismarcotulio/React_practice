const person = {
    name: 'Tony',
    lastname:'Stark',
    address: {
        country: 'USA',
        city: 'dont know'
    }
};

//console.table( person );

const person2 = {...person};
person2.name = 'Peter';

console.log( person );
console.log( person2 );
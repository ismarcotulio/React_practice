
const name = 'Marco Tulio'
const lastname = 'Ruiz'

//const entireName = name + ' ' + lastname;
const entireName = `
${ name }
${ lastname }
${ 1 + 1 }
`;

console.log(entireName);

function getGreeting(){
    return 'Hello World';
}

console.log(`This is a text: ${getGreeting()} `);
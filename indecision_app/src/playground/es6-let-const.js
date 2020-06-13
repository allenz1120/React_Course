var nameVar = 'Allen';
var nameVar = 'Anthony';
//can reassign and redefine
console.log('namevar:', nameVar);


let nameLet = 'Alex';
nameLet = 'Brian';
//Can reassign but cannot redefine
console.log('nameLet:', nameLet);

const nameConst = 'Harsh';
//Cannot reassign or  redefine
console.log('nameConst:', nameConst);

//Block level scoping
const fullName = 'Allen Zou';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

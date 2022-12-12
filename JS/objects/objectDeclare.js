//Declearing an object
const person={};
console.log(person);

//Declearing an object with properties(key:'pair')
let firstObject={id:'2',role:'trainee'}
console.log("This is object decleration "+ firstObject.id +" "+ firstObject.role)

//storing multiple values in same key in object
var object={firstName:['Divish','vijay'] , age:[22,23]};
console.log(object.firstName[1],object.age[1]);

//other way to assign propreties to objects
var details={}
details.name='Divish'
details.age=22
console.log(details)
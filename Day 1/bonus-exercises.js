// Ex.1
const prime_num = num => {
    if ( num <= 0 ) return;

    let arr = [];
    for ( let i = 1; i < num; i++ ){
        if ( num % i === 0 ){
            arr.push(i);
        }
    }

    const isPrime = arr.length > 2 ? false : true;
    return isPrime;
}

console.log(prime_num(10));

const prime_arr = numArr => { // with filter
    return numArr.filter(i => prime_num(i) == true);
}

console.log("Exercise 1:")
console.log(prime_arr([3, 5, 8, 10, 11, 14, 19]));
console.log("\n");

// Ex.2
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    languages: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
}

let firstName = person.firstName;
let gender = person.gender;
let degree = person.education.degree;
let [english] = person.languages;

const student = {
    firstName,
    gender,
    degree,
    english
}

console.log("Exercise 2:");
console.log(student);
console.log("\n");

// Ex.3
function getInfo(stud){
    if ( stud.firstName === undefined ) stud.firstName = 'Quân';
    if ( stud.degree === undefined) stud.degree = 'Bachelor';

    console.log(`firstname: ${stud.firstName}`);
    console.log(`degree: ${stud.degree}`);
}

const sv2 = {
    name: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
}

console.log("Exercise 3:");
getInfo(student);
getInfo(sv2);
console.log("\n");

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

// Ex.4
let courses = [
    {
        id: 1,
        title: 'ReactJS Tutorial',
        rating: 4.2,
    },
    {
        id: 2,
        title: 'Angular Tutorial',
        rating: 2.5,
    },
    {
        id: 3,
        title: 'VueJS Tutorial',
        rating: 3.8,
    },
    {
        id: 4,
        title: 'Java Tutorial',
        rating: 3.8,
    },
    {
        id: 5,
        title: 'JavaScript',
        rating: 3.5,
    },
];

function course_ratings(...input){
    for (let course of input){
        if ( course.rating >= 4 ){
            return course;
        };
    };
};

console.log("Exercise 4:");
console.log(course_ratings(...courses));
console.log("\n");

// Ex.5
function course_new_format(...input){
    for ( let course of input){
        if ( course.rating < 4 ){
            return `<${course.id}> - <${course.title}> - <${course.rating}>`;
        }
    }
};

console.log("Exercise 5:");
console.log(course_new_format(...courses));
console.log("\n");

// Ex.6
let addedCourses = [
    {
        id: 6,
        title: 'PHP Tutorial',
        rating: 3,
    },
    {
        id: 7,
        title: 'C# Tutorial',
        rating: 2,
    },
    {
        id: 8,
        title: 'Docker Tutorial',
        rating: 3.8,
    }
]

function addingCourses(input1, ...input2){
    for ( let input of input2){
        input1.push(input);
    }
    return input1;
}

console.log("Exercise 6:");
console.log(addingCourses(courses, ...addedCourses));
console.log("\n");

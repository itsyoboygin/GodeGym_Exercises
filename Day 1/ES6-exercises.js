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

// Let 
let studentCount =10;
studentcount =11;
 console.log("student Count:",studentCount);

 //Const
 const collegeName ="VETIAS";
 console.log("College Name:", collegeName);

//Template Literals
let studentName ="Arun"
console.log(`Welcome ${studentName} to ${collegeName}`);

//Object
const student ={
    name:"Arun",
    age:20,
    department:"IT"
};
console.log(student);

//Destructing
const {name,age,department}=student;
console.log("Name:",name);
console.log("Age:",age);
console.log("Department:",department);

//Arrow Function
const displaystudent=() => {
    console.log(`student Name:$(name)`);
};

//Arrays
const students=[
    "Arun",
    "Priya",
    "Devadharshini"
];

console.log(students);

//Spread Operator
const updatedstudents=[
    ...students,
    "Rahul"
];

console.log(updatedstudents);

//Rest Operator
function maximumMarks(...marks){
    let max=Math.max(...marks);
    return max;
}
 
console.log("Maximum Marks:", maximumMarks(80,90,70));

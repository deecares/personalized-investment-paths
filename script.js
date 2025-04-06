//declaring variables
let x=7;
var y=55;
const t=76;

//operators
let a,b,c;
a=2;
b=5;
c=a+b;
console.log(c);
c=a-b;
console.log(c);
c=a/b;
console.log(c);
c=a*b;
console.log(c);
c=b%a;
console.log(c);
c=b**a;
console.log(c);
a++;
b++;
console.log(a,b);

//constant
const d="deekshi";
//can't be re-assigned
//d="dee";
console.log(d);

//DATA TYPES
//Number
let l= 15;
// String
let name ="kendal jenner";
// Boolean
let a1 = true;
let a2= false;
// Object
let obj={district:"vzm", state:"AP"};
// Array object:
let MAKEUP=["moisturizer","sunscreen","eyeliner","concealer","highlighter","lipstick","blush"];

//Accessing 
console.log(l,a1,a2,obj.district,MAKEUP[4]);

//Functions
function callme(name){
    console.log("hey!this is "+name)
}
//calling function with parameter
callme("Deekshitha");

//Arrow function
const div=(a,b) => b/a;
console.log(div(a,b));
//output:2

//LOOPS
//for
for (let i=0;i<5;i++){
    console.log(i+1);
}
//while(used when we dont know how many times the loop runs)
let j=0;
while(j<10){
    console.log(j+=2)
}
//do..while(used when we should output atleast once without any condition checking)
let k=1;
do{
    console.log("number is "+k)
    k++;
}while(k<5)


//Arrays
let characters=["Harry Potter","Hermoine","Ron","Draco","Matthew"];
console.log(cricketers[3]);
console.log(cricketers.length);//output:5
console.log(cricketers.sort());//[ 'Draco', 'Harry Potter', 'Hermoine', 'Matthew', 'Ron' ]
console.log(cricketers.reverse());//[ 'Draco', 'Harry Potter', 'Hermoine', 'Matthew', 'Ron' ]

//Destructuring
//object
const person={Name: "Dee", gender:'F'}
const { Name, gender}=person;
console.log(Name);
console.log(gender);

//Array
const arr=["a","b","c"];
const [A,B]=arr;
console.log(b);

//Spread operator
//Arrays
const n1=[1, 2, 3];
const n2=[4, 5, 6];
const final=[...n1,...n2];
console.log(final); //output: [1, 2, 3, 4, 5, 6]
//Objects
const person1 = { Name:"Dee", gender:"F" };
const info = { age: 19, country:"India" };
const fullInfo = { ...person1, ...info };
console.log(fullInfo);

//push and pop (inserting and deleting from ends)
let array=[1,2,3,4,5];
array.pop();
console.log(array);
array.push(7);
console.log(array);

//shift and unshift(inserting and deleting from beginning of array)
array.shift();
console.log(array);
array.unshift(0);
console.log(array);


//splicing
array.splice(2,5);//removes from index 2 to 4(index 5 is not included)
console.log(array);


//prototype
function House(name) {
  this.name=name;
}
House.prototype.belongsto=function() {
  console.log("This house belongs to "+ this.name);
};
const house= new House("DEe");
house.belongsto(); 
//output:This house belongs to Yakshu

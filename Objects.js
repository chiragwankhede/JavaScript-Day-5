

console.log("Hello");

const details ={
    myName: "Chirag Wankhede",
    Age : 24,
    "Myself is":true,
};

console.log(details["Myself is"]);


// Q1 - add dynamic key value pairs- 

const property= "firstname";
const value = "Chirag Wankhede";

const userName = {
 [property] : value,

}

console.log(userName[property]);

//  Q2- For-in loop - 

const university ={
    "school1" : "Symbiosis",
    "school2" : "Sipna",
    "school3" : "IIT",
    
};

for (key in university){
    console.log(university[key])
}

// Q3 - Json.Stringify and JSON.parse - 


const about=  {

    nam : "Chirag Wankhede",
    age : 24,

};

const strings= (JSON.stringify(about));

// console.log(JSON.parse(strings));

//  Use to store in our local storage - 

localStorage.setItem("items", strings);

console.log(JSON.parse(localStorage.getItem("items", strings)))


// Q4- destructuring in objects - 

const user = {

naam: "Chirag",
Age:29,
fullname :{
    first : "Chirag",
    last : "Wankhede",
}
};

const {fullname: {first,last}} = user;
console.log(first,last);

// Q5 - Deep copy/ clone of objects - 

const fruits= {
    pehela: "Apple",
    dushra: "Mango",
    age: 100,
};

// 1 way - assign 

const Clone = Object.assign({},fruits);
Clone.pehela = "KIWI";

console.log(fruits,Clone);

// 2- JSON parse and stringify - 


const objClone = JSON.parse(JSON.stringify(fruits));
objClone.pehela = "Orange";

console.log(fruits,objClone);

// 3- Spread operator -

const objClone2= {...fruits};

objClone2.pehela = "Avacado"

console.log(fruits,objClone2);
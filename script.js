


// variable

// variable main use to store the data

// types 

// var - global scope

// let - block scope

// const - block scope


// rules 

// var - global scope

var a = 10   // declration // intialiazation

a = 12      //reuse   // reiniti

var a = 30 // redeclration

console.log(a)


// let - block scope

let b  = 12 // declration  // intialiazation

b = 14      // reuse    // reinti

// let b = 15  not accept redeclration

console.log(b);


// const - block scope

const c = 15  // declration // intizialiaion

// c = 20  not accept reuse and reinzialiaztion

// const c = 22 not accept redeclration

console.log(c);


let empname = "john"

empname = "johnpaul"

console.log(empname);


// printing statement

// 1. console.log()

console.log(100);

var a1 = 234

console.log(a1);

// 2. alert()

// alert("hello team this is our first class in javascript")

// 3. confirm()

// confirm("did you complete html css?")

// 4. prompt()

// prompt("what is your name ?")

// 5. document.writeln()

// document.writeln("ben")

// i want my user name ? to print console


// let userName = prompt("what is your name :")

// console.log(userName);


// let userStatus = confirm("are you available or not ?  in the class!")

// console.log(userStatus);


// i) first you get username
// ii) store the variable (uName)
// iii) shown to the pop that username

// let uname = prompt("give your name :- ")

// console.log(uname);

// confirm(uname)


// console method

// console.log()
console.log(100);

// console.warn()
console.warn(100);

// console.error()
console.error(100);


// console.clear()



// dataTypes

// primitive datatype

// 1. string - "123", "abc"
console.log("string -", ("123abcAbc"));

// 2. number - 1234e

console.log("number - ", 123);

// 3. boolean - true - 1, false - 0

console.log("boolean - ", true , false)
// 4. undefined

let a2;

console.log(a2);


// 5. null

// let a3 = prompt()

// console.log(a3);

console.clear()

// non primitive datatype

// array

// []

let multiData = ["pine apple","apple","orange","cherry","banana","papaya","mango"]

console.log(multiData);
console.log(multiData[2]);
console.log(multiData[0]); // first val dynamic
console.log(multiData[multiData.length-1]); // dynamic access last val


// object

// {}


let objMultiData = {
    redFruit : ["apple","cherry"],
    yellowFruit : ["banana","pine apple"],
    orangeFruit : "orange"
}

console.log(objMultiData);
console.log(objMultiData.redFruit);
console.log(objMultiData.yellowFruit[0]);
console.log(objMultiData.redFruit[1]);


console.clear();


// operators 

// Arithmetic operator

// operator        simpal   

// addition          +

// subraction        -

// multiplication    *

// division          /

// modulus           %

// exponencial       **

// increment         ++

    

// decrement         --


 console.log(1+5);
 console.log(1-5);
 console.log(1*5);
 console.log(1/5);
 console.log(1%5);
 console.log(1**5); // 1^5 = 1*1*1*1*1 = 1

 // increment    ++

 // 1)  post increment
 // 2)  pre increment

 let num = 10
 
 num = ++num

 console.log(num);


 let num1 = 2 
 let num2 = num1++

 console.log("num1 :-",num1); //3
 console.log("num2 :-",num2); //2


 let num3 = 2  
 let num4 = --num3 
 let num5 = num4-- 


 console.log("num3 :-",num3); 
 console.log("num4 :-",num4); 
 console.log("num5 :-",num5); 
 

 // Assignment operator
 

 let numval = 10

 let additionVal = 200

 
 console.log(numval);

 console.log(additionVal);
 
 numval += additionVal // numval = numval + additionVal
 console.log(numval);
 
 numval -= additionVal // numval = numval - additionVal
 console.log(numval);
 
 numval *= additionVal // numval = numval * additionVal
 console.log(numval);
 
 numval /= additionVal;
 console.log(numval);
 
 numval **= additionVal; // 10^200

 console.log(numval);

console.clear();


// comparision operator

// meaning        operator        example            result

// lessThen          <             (5<4)              false

// GreaterThen       >             (5>5)              false

// lessThenEq        <=            (6<=6)             true

// GreaterThenEq     >=            (6>=6)             true

// loosyTypeEq       ==            (5=="5")           true

// StrictlyTypeEq    ===           (5==="5")          false

// loosyNotEq         !=            (5!="5")          false

// strictlyNotEq     !==            (5!==5)           false


 // Examples

 console.log(5>=6); // b - false
 console.log(7<9);  // a - true
 console.log(8>=.90); // g - true
 console.log(8==="8"); // h - false
 console.log(8=="8"); // k - true
 console.log(7==.7); // k - true - > false
 console.log(9!=="9"); // m - false -> true
 console.log(32>23); // s - true
 console.log(0===0); // s - true
 console.log(-5>1);  // t - false
 

 // logical operator

 // AND - &&

 // true true true   = true

 // false true true  = false

 // OR  - ||

 // false false false = false

 //  true false true  = true

 // NOT - !

 // !(true) = false

 // !(false) = true

 //Examples


 console.log((10>10)&&(12>1)); // false && true = false
 console.log((10=="10")|| !(10==="10")); // true || true = true
 console.log(!(10=="10")); // false


 console.log((12>1)||(10==="10")); // true 
 console.log((12>12)|| !(12>0));   // false
 console.log((13>=12)&& !(12===0));// true
 console.log(!(12!=="12"));        // true --> !(true) = false
 console.log(!(1===1)&& !(1===1)); // false
 console.log(!(0)|| !(9=="9"));    // true
 console.log(!(45>45)||(79!="79"));// true
 console.log((0===0)&& !(0===0));  // false
 console.log((9==9)&& !(9!=9));    // true
 console.log(!(true) || !(false)); // true



 // Concatenation (+)

 let ename = "john"
 let ename1 = "paul"

 let empDetials = ename + ""+ ename1

 console.log(empDetials);

 // template litral

 let ename2 = "abc"
 let ename3 = "def"

 let empDetials1 = `${ename2} hghjgh ${ename3}`

 console.log(empDetials1);

 console.clear();
 

 // Type Conversion

 let str1 = "123"

 let num12 = 123

 let calc = str1 + num12

 console.log(typeof(calc));

 // implicit conversion

 // string

 // string anything string

 console.log(typeof("1"+12));
 console.log(("1"+true));
 console.log(("1"+"1"));
 console.log(("1"+[1,2]));
 console.log(typeof("1"+{k:1}));
 console.log(("1"+undefined));
 console.log(("1"+null));

 // number

 console.log((1+1));
 console.log((1+"1"));
 console.log((1+false));
 console.log((1+[1,2]));
 console.log((1+{k:1}));
 console.log((1+undefined));
 console.log((1+null));

 // boolean

 console.log(true+"1");
 console.log(true+2);
 console.log(true+true);
 console.log(true+undefined);
 console.log(true+null);
 console.log(true+["true"]);
 console.log(typeof(true+{}));
 
 
 // Explicit Conversion

 // Number
 
 console.log(1+Number("1"));
 console.log(Number(""));
 console.log(Number(true));
 console.log(Number(false));
 console.log(Number(undefined));
 console.log(Number(null));
 console.log(Number([5,5]));
 console.log(Number({k:1}));
 console.log(Number(1));

 //Boolean

  console.log(Boolean(""));
  console.log(Boolean(0));
  console.log(Boolean(-1));
  console.log(Boolean(undefined));
  console.log(Boolean(null));
  console.log(Boolean([5, 5]));
  console.log(Boolean({ k: 1 }));
  console.log(Boolean(1));


  // Flow Control Statement

  // conditional statement

  // if

  // condition  true = allow

  if(5!="5"){
    console.log("the condition is true");
  }

  // if-else

    // condition true = if, false = else

        if(0){
            console.log("condition is true");  
        }else{
            console.log("condition is false"); 
        }

  // if-else else-if

  // session finder

  let hour = 22

  if(hour>=1 && hour <=6){
     console.log("Good morning");
  }else if(hour>=7 && hour<=12){
    console.log("morning");
  }else if(hour>=13 && hour<=17){
    console.log("Good Afternoon");
  }else if(hour>=18 && hour<=19){
    console.log("Good evening");
  }else{
    console.log("Good ningt");
  }

  // nested if

//   let age = prompt("enter your age")
//   let height = prompt("enter your height")
//   let weight = prompt("enter your weight")

//   if(age>=18){
//       if(height>=170){
//         if(weight>=70){
//             alert("congradulation your eligible");
            
//         }else{
//                 alert("your weight is not eligible");

//         }
//       }else{
//             alert("your height is not eligible");

//       }
//   }else{
//     alert("your age is not eligible");
    
//   }



  // switch statement

//   switch(){
//     case value : statement ; break;
//     case value : statement ; break;
//     case value : statement ; break;
//     case value : statement ; break;
//     case value : statement ; break;
//   }

// traffic light message 

  let trafficLight = "green"

  switch(trafficLight){
    case "red" : console.log("stop the vechicle");break;
    case "yellow" : console.log("start the vechile");break;
    case "green" : console.log("lets go") ; break; 
  }

  // ternary operator

//   condition  ? "statement" : "statement"

let pwdInput = 0;

pwdInput ? console.log("allow the web") : console.log("your password is wrong");


// looping statement

// for loop

// while loop

// do while loop

// for of 

// for in


// for loop

// for(intiialization; condition ; itration){
//   //statement
// }

for(let i = 1 ; i<=5 ; i++){ // i = 1 ; 1<=5 true ; 1++ = 2
  console.log(i); // 1 2 3 4 5  // i = 2 ; 2<=5 true ; 2++ = 3
                              // i =3  ; 3<=5 true ; 3++ = 4
                              // i = 4 ; 4<=5 true ; 4++ = 5
                              // i=5   ; 5<=5 true ; 5++ =6
                              // i=6   ; 6<=5 false
}


// 2 multiply table

for(let i = 1; i<=10 ; i++){
  console.log(`${i}*2=${i*2}`);
}

// 3 odd num

for(let i=1;i<=10;i++){
  if(i%2==1){
    console.log("add value :- " + i);
    
  }else{
    console.log("event value :- " + i);
    
  }
}

console.clear();


// while loop

// intialiazation
// while(){
// statement;
// iteration
//}


let val = 10
while(val>=100){
  console.log(val);
  val++
}

// do while

// intialiazation
// do{
// statement; iteration
//}
// while(condition)


let val1 = 10

do{
  console.log(val1); val1++
}

while(val1>=100)



// for of loop - string, array , function

let example = "javascript"
let example1 = ["apple","orange","banana"]

for(let team of example1){
  console.log(team);
  
}

// for in loop - object

let example2 = {
  highVal : "rolls",
  minimumVal : "audi",
  leastVal : "ford"
}


for(let team1 in example2){
  console.log(example2[team1]);
  
}

for(let team2 in example){
  console.log(team2);
  
}

console.clear();

 
// FUNCTION

function one(a){
  console.log(a);
}

one("hello")

let emp = {
  ename : "john",
  eAge : 22
}

let emp1 = ["john",21,"software Engineer"]

function one1(b){
  return(b)
}

let returnVal = one1(1000)

console.log(returnVal);

function three(){
  console.log(10+returnVal);
  
}

three()


// scopes

// var - global scope or function scope
// let - block scope
// const - block scope

const ant = 10
console.log(ant);


function four(){
  if(true){
    const one2 = "i am a block scope"
    console.log(one2);
  }

  
}

four()


// function types 


// named function

function named(){
  console.log("i am named function");
  
}
named()


// annonymous function

var annoymous = function () {
  console.log("i am annonymous function");
};
annoymous()




// arrow function

var arrow =()=>{
  console.log("i am a arrow function");
  
}
arrow()

console.clear();


function random(){
  console.log("i am work");
}

random()
  // self invoke function

//   (function (offer) {
//     alert("sales offer now " + offer + "off");
//   }
// )(75);

// default parameter

function form(a,b,c,d="no"){
  console.log("name ",a);
  console.log("department ",b);
  console.log("age ",c);
  console.log("disablity ",d);
}
form("kamal","ece",22)


// generator function

function*genFun(){
  yield "try again"
  yield "best luck try again"
  yield "your won"
  yield "try again"
}

let finalVal = genFun()

console.log(finalVal.next().value);
console.log(finalVal.next().done);
console.log(finalVal.next());
console.log(finalVal.next());
console.log(finalVal.next());


// callback & higherorder function

function function1(){
  console.log("higher order function");
  
}

function function2(){
  console.log("callback function");
  
}

function1(function2())


function add(callback,a,b){ //callback=sub,a=20,b=40
  console.log(a+b);//60
  callback(20,20)//sub(20,20)
}

function sub(num1,num2){
  console.log(num1-num2);//0
  
}


add(sub,20,40)


// Es6 edition

// spread operator

// array , object

// [...], {...}

// merge,clone

// array

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]

let finalVal1 = [...arr1,...arr2,9,10]

console.log(finalVal1);

// object

let obj1 = {
  ename : "ram",
  position : "trainee",
  salary : 10000
}

let obj2 = {
  ename1 : "ram",
  position1 : "developer",
  salary1 : 25000

}
 

let finalObj = {...obj1,...obj2}

console.log(finalObj);


// rest operator

// function

// (...)

// we can multiple argument in single parameter

function hello(a,b,c,...d){
  console.log(a+b+c);
  console.log(d[1]);
  
  
}

hello(1,2,3,4,5,6,7,8)

 
 
 // destracture

 // normal
 let fruit = ["apple","banana","cherry"]

 let firstFruit = fruit[0]
 
 
//  console.log("the red fruit is",firstFruit);
//  console.log("100 inr in the fruit",firstFruit);
 
 // destracture


 let [c1,c2,c3]=fruit

  console.log("the red fruit is", c1);
  console.log("100 inr in the fruit", c2);
 
 
 let nested = [1,2,3,4,[5,6,[7]]]
 
 console.log(nested[4][2][0])

 let [d1,d2,d3,d4,[d5,d6,[d7]]]=nested

 console.log(d5);
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 





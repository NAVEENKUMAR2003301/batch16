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




 


 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 





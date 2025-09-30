


// // // // // variable

// // // // // variable main use to store the data

// // // // // types 

// // // // // var - global scope

// // // // // let - block scope

// // // // // const - block scope


// // // // // rules 

// // // // // var - global scope

// // // // var a = 10   // declration // intialiazation

// // // // a = 12      //reuse   // reiniti

// // // // var a = 30 // redeclration

// // // // console.log(a)


// // // // // let - block scope

// // // // let b  = 12 // declration  // intialiazation

// // // // b = 14      // reuse    // reinti

// // // // // let b = 15  not accept redeclration

// // // // console.log(b);


// // // // // const - block scope

// // // // const c = 15  // declration // intizialiaion

// // // // // c = 20  not accept reuse and reinzialiaztion

// // // // // const c = 22 not accept redeclration

// // // // console.log(c);


// // // // let empname = "john"

// // // // empname = "johnpaul"

// // // // console.log(empname);


// // // // // printing statement

// // // // // 1. console.log()

// // // // console.log(100);

// // // // var a1 = 234

// // // // console.log(a1);

// // // // // 2. alert()

// // // // // alert("hello team this is our first class in javascript")

// // // // // 3. confirm()

// // // // // confirm("did you complete html css?")

// // // // // 4. prompt()

// // // // // prompt("what is your name ?")

// // // // // 5. document.writeln()

// // // // // document.writeln("ben")

// // // // // i want my user name ? to print console


// // // // // let userName = prompt("what is your name :")

// // // // // console.log(userName);


// // // // // let userStatus = confirm("are you available or not ?  in the class!")

// // // // // console.log(userStatus);


// // // // // i) first you get username
// // // // // ii) store the variable (uName)
// // // // // iii) shown to the pop that username

// // // // // let uname = prompt("give your name :- ")

// // // // // console.log(uname);

// // // // // confirm(uname)


// // // // // console method

// // // // // console.log()
// // // // console.log(100);

// // // // // console.warn()
// // // // console.warn(100);

// // // // // console.error()
// // // // console.error(100);


// // // // // console.clear()



// // // // // dataTypes

// // // // // primitive datatype

// // // // // 1. string - "123", "abc"
// // // // console.log("string -", ("123abcAbc"));

// // // // // 2. number - 1234e

// // // // console.log("number - ", 123);

// // // // // 3. boolean - true - 1, false - 0

// // // // console.log("boolean - ", true , false)
// // // // // 4. undefined

// // // // let a2;

// // // // console.log(a2);


// // // // // 5. null

// // // // // let a3 = prompt()

// // // // // console.log(a3);

// // // // console.clear()

// // // // // non primitive datatype

// // // // // array

// // // // // []

// // // // let multiData = ["pine apple","apple","orange","cherry","banana","papaya","mango"]

// // // // console.log(multiData);
// // // // console.log(multiData[2]);
// // // // console.log(multiData[0]); // first val dynamic
// // // // console.log(multiData[multiData.length-1]); // dynamic access last val


// // // // // object

// // // // // {}


// // // // let objMultiData = {
// // // //     redFruit : ["apple","cherry"],
// // // //     yellowFruit : ["banana","pine apple"],
// // // //     orangeFruit : "orange"
// // // // }

// // // // console.log(objMultiData);
// // // // console.log(objMultiData.redFruit);
// // // // console.log(objMultiData.yellowFruit[0]);
// // // // console.log(objMultiData.redFruit[1]);


// // // // console.clear();


// // // // // operators 

// // // // // Arithmetic operator

// // // // // operator        simpal   

// // // // // addition          +

// // // // // subraction        -

// // // // // multiplication    *

// // // // // division          /

// // // // // modulus           %

// // // // // exponencial       **

// // // // // increment         ++

    

// // // // // decrement         --


// // // //  console.log(1+5);
// // // //  console.log(1-5);
// // // //  console.log(1*5);
// // // //  console.log(1/5);
// // // //  console.log(1%5);
// // // //  console.log(1**5); // 1^5 = 1*1*1*1*1 = 1

// // // //  // increment    ++

// // // //  // 1)  post increment
// // // //  // 2)  pre increment

// // // //  let num = 10
 
// // // //  num = ++num

// // // //  console.log(num);


// // // //  let num1 = 2 
// // // //  let num2 = num1++

// // // //  console.log("num1 :-",num1); //3
// // // //  console.log("num2 :-",num2); //2


// // // //  let num3 = 2  
// // // //  let num4 = --num3 
// // // //  let num5 = num4-- 


// // // //  console.log("num3 :-",num3); 
// // // //  console.log("num4 :-",num4); 
// // // //  console.log("num5 :-",num5); 
 

// // // //  // Assignment operator
 

// // // //  let numval = 10

// // // //  let additionVal = 200

 
// // // //  console.log(numval);

// // // //  console.log(additionVal);
 
// // // //  numval += additionVal // numval = numval + additionVal
// // // //  console.log(numval);
 
// // // //  numval -= additionVal // numval = numval - additionVal
// // // //  console.log(numval);
 
// // // //  numval *= additionVal // numval = numval * additionVal
// // // //  console.log(numval);
 
// // // //  numval /= additionVal;
// // // //  console.log(numval);
 
// // // //  numval **= additionVal; // 10^200

// // // //  console.log(numval);

// // // // console.clear();


// // // // // comparision operator

// // // // // meaning        operator        example            result

// // // // // lessThen          <             (5<4)              false

// // // // // GreaterThen       >             (5>5)              false

// // // // // lessThenEq        <=            (6<=6)             true

// // // // // GreaterThenEq     >=            (6>=6)             true

// // // // // loosyTypeEq       ==            (5=="5")           true

// // // // // StrictlyTypeEq    ===           (5==="5")          false

// // // // // loosyNotEq         !=            (5!="5")          false

// // // // // strictlyNotEq     !==            (5!==5)           false


// // // //  // Examples

// // // //  console.log(5>=6); // b - false
// // // //  console.log(7<9);  // a - true
// // // //  console.log(8>=.90); // g - true
// // // //  console.log(8==="8"); // h - false
// // // //  console.log(8=="8"); // k - true
// // // //  console.log(7==.7); // k - true - > false
// // // //  console.log(9!=="9"); // m - false -> true
// // // //  console.log(32>23); // s - true
// // // //  console.log(0===0); // s - true
// // // //  console.log(-5>1);  // t - false
 

// // // //  // logical operator

// // // //  // AND - &&

// // // //  // true true true   = true

// // // //  // false true true  = false

// // // //  // OR  - ||

// // // //  // false false false = false

// // // //  //  true false true  = true

// // // //  // NOT - !

// // // //  // !(true) = false

// // // //  // !(false) = true

// // // //  //Examples


// // // //  console.log((10>10)&&(12>1)); // false && true = false
// // // //  console.log((10=="10")|| !(10==="10")); // true || true = true
// // // //  console.log(!(10=="10")); // false


// // // //  console.log((12>1)||(10==="10")); // true 
// // // //  console.log((12>12)|| !(12>0));   // false
// // // //  console.log((13>=12)&& !(12===0));// true
// // // //  console.log(!(12!=="12"));        // true --> !(true) = false
// // // //  console.log(!(1===1)&& !(1===1)); // false
// // // //  console.log(!(0)|| !(9=="9"));    // true
// // // //  console.log(!(45>45)||(79!="79"));// true
// // // //  console.log((0===0)&& !(0===0));  // false
// // // //  console.log((9==9)&& !(9!=9));    // true
// // // //  console.log(!(true) || !(false)); // true



// // // //  // Concatenation (+)

// // // //  let ename = "john"
// // // //  let ename1 = "paul"

// // // //  let empDetials = ename + ""+ ename1

// // // //  console.log(empDetials);

// // // //  // template litral

// // // //  let ename2 = "abc"
// // // //  let ename3 = "def"

// // // //  let empDetials1 = `${ename2} hghjgh ${ename3}`

// // // //  console.log(empDetials1);

// // // //  console.clear();
 

// // // //  // Type Conversion

// // // //  let str1 = "123"

// // // //  let num12 = 123

// // // //  let calc = str1 + num12

// // // //  console.log(typeof(calc));

// // // //  // implicit conversion

// // // //  // string

// // // //  // string anything string

// // // //  console.log(typeof("1"+12));
// // // //  console.log(("1"+true));
// // // //  console.log(("1"+"1"));
// // // //  console.log(("1"+[1,2]));
// // // //  console.log(typeof("1"+{k:1}));
// // // //  console.log(("1"+undefined));
// // // //  console.log(("1"+null));

// // // //  // number

// // // //  console.log((1+1));
// // // //  console.log((1+"1"));
// // // //  console.log((1+false));
// // // //  console.log((1+[1,2]));
// // // //  console.log((1+{k:1}));
// // // //  console.log((1+undefined));
// // // //  console.log((1+null));

// // // //  // boolean

// // // //  console.log(true+"1");
// // // //  console.log(true+2);
// // // //  console.log(true+true);
// // // //  console.log(true+undefined);
// // // //  console.log(true+null);
// // // //  console.log(true+["true"]);
// // // //  console.log(typeof(true+{}));
 
 
// // // //  // Explicit Conversion

// // // //  // Number
 
// // // //  console.log(1+Number("1"));
// // // //  console.log(Number(""));
// // // //  console.log(Number(true));
// // // //  console.log(Number(false));
// // // //  console.log(Number(undefined));
// // // //  console.log(Number(null));
// // // //  console.log(Number([5,5]));
// // // //  console.log(Number({k:1}));
// // // //  console.log(Number(1));

// // // //  //Boolean

// // // //   console.log(Boolean(""));
// // // //   console.log(Boolean(0));
// // // //   console.log(Boolean(-1));
// // // //   console.log(Boolean(undefined));
// // // //   console.log(Boolean(null));
// // // //   console.log(Boolean([5, 5]));
// // // //   console.log(Boolean({ k: 1 }));
// // // //   console.log(Boolean(1));


// // // //   // Flow Control Statement

// // // //   // conditional statement

// // // //   // if

// // // //   // condition  true = allow

// // // //   if(5!="5"){
// // // //     console.log("the condition is true");
// // // //   }

// // // //   // if-else

// // // //     // condition true = if, false = else

// // // //         if(0){
// // // //             console.log("condition is true");  
// // // //         }else{
// // // //             console.log("condition is false"); 
// // // //         }

// // // //   // if-else else-if

// // // //   // session finder

// // // //   let hour = 22

// // // //   if(hour>=1 && hour <=6){
// // // //      console.log("Good morning");
// // // //   }else if(hour>=7 && hour<=12){
// // // //     console.log("morning");
// // // //   }else if(hour>=13 && hour<=17){
// // // //     console.log("Good Afternoon");
// // // //   }else if(hour>=18 && hour<=19){
// // // //     console.log("Good evening");
// // // //   }else{
// // // //     console.log("Good ningt");
// // // //   }

// // // //   // nested if

// // // // //   let age = prompt("enter your age")
// // // // //   let height = prompt("enter your height")
// // // // //   let weight = prompt("enter your weight")

// // // // //   if(age>=18){
// // // // //       if(height>=170){
// // // // //         if(weight>=70){
// // // // //             alert("congradulation your eligible");
            
// // // // //         }else{
// // // // //                 alert("your weight is not eligible");

// // // // //         }
// // // // //       }else{
// // // // //             alert("your height is not eligible");

// // // // //       }
// // // // //   }else{
// // // // //     alert("your age is not eligible");
    
// // // // //   }



// // // //   // switch statement

// // // // //   switch(){
// // // // //     case value : statement ; break;
// // // // //     case value : statement ; break;
// // // // //     case value : statement ; break;
// // // // //     case value : statement ; break;
// // // // //     case value : statement ; break;
// // // // //   }

// // // // // traffic light message 

// // // //   let trafficLight = "green"

// // // //   switch(trafficLight){
// // // //     case "red" : console.log("stop the vechicle");break;
// // // //     case "yellow" : console.log("start the vechile");break;
// // // //     case "green" : console.log("lets go") ; break; 
// // // //   }

// // // //   // ternary operator

// // // // //   condition  ? "statement" : "statement"

// // // // let pwdInput = 0;

// // // // pwdInput ? console.log("allow the web") : console.log("your password is wrong");


// // // // // looping statement

// // // // // for loop

// // // // // while loop

// // // // // do while loop

// // // // // for of 

// // // // // for in


// // // // // for loop

// // // // // for(intiialization; condition ; itration){
// // // // //   //statement
// // // // // }

// // // // for(let i = 1 ; i<=5 ; i++){ // i = 1 ; 1<=5 true ; 1++ = 2
// // // //   console.log(i); // 1 2 3 4 5  // i = 2 ; 2<=5 true ; 2++ = 3
// // // //                               // i =3  ; 3<=5 true ; 3++ = 4
// // // //                               // i = 4 ; 4<=5 true ; 4++ = 5
// // // //                               // i=5   ; 5<=5 true ; 5++ =6
// // // //                               // i=6   ; 6<=5 false
// // // // }


// // // // // 2 multiply table

// // // // for(let i = 1; i<=10 ; i++){
// // // //   console.log(`${i}*2=${i*2}`);
// // // // }

// // // // // 3 odd num

// // // // for(let i=1;i<=10;i++){
// // // //   if(i%2==1){
// // // //     console.log("add value :- " + i);
    
// // // //   }else{
// // // //     console.log("event value :- " + i);
    
// // // //   }
// // // // }

// // // // console.clear();


// // // // // while loop

// // // // // intialiazation
// // // // // while(){
// // // // // statement;
// // // // // iteration
// // // // //}


// // // // let val = 10
// // // // while(val>=100){
// // // //   console.log(val);
// // // //   val++
// // // // }

// // // // // do while

// // // // // intialiazation
// // // // // do{
// // // // // statement; iteration
// // // // //}
// // // // // while(condition)


// // // // let val1 = 10

// // // // do{
// // // //   console.log(val1); val1++
// // // // }

// // // // while(val1>=100)



// // // // // for of loop - string, array , function

// // // // let example = "javascript"
// // // // let example1 = ["apple","orange","banana"]

// // // // for(let team of example1){
// // // //   console.log(team);
  
// // // // }

// // // // // for in loop - object

// // // // let example2 = {
// // // //   highVal : "rolls",
// // // //   minimumVal : "audi",
// // // //   leastVal : "ford"
// // // // }


// // // // for(let team1 in example2){
// // // //   console.log(example2[team1]);
  
// // // // }

// // // // for(let team2 in example){
// // // //   console.log(team2);
  
// // // // }

// // // // console.clear();

 
// // // // // FUNCTION

// // // // function one(a){
// // // //   console.log(a);
// // // // }

// // // // one("hello")

// // // // let emp = {
// // // //   ename : "john",
// // // //   eAge : 22
// // // // }

// // // // let emp1 = ["john",21,"software Engineer"]

// // // // function one1(b){
// // // //   return(b)
// // // // }

// // // // let returnVal = one1(1000)

// // // // console.log(returnVal);

// // // // function three(){
// // // //   console.log(10+returnVal);
  
// // // // }

// // // // three()


// // // // // scopes

// // // // // var - global scope or function scope
// // // // // let - block scope
// // // // // const - block scope

// // // // const ant = 10
// // // // console.log(ant);


// // // // function four(){
// // // //   if(true){
// // // //     const one2 = "i am a block scope"
// // // //     console.log(one2);
// // // //   }

  
// // // // }

// // // // four()


// // // // // function types 


// // // // // named function

// // // // function named(){
// // // //   console.log("i am named function");
  
// // // // }
// // // // named()


// // // // // annonymous function

// // // // var annoymous = function () {
// // // //   console.log("i am annonymous function");
// // // // };
// // // // annoymous()




// // // // // arrow function

// // // // var arrow =()=>{
// // // //   console.log("i am a arrow function");
  
// // // // }
// // // // arrow()

// // // // console.clear();


// // // // function random(){
// // // //   console.log("i am work");
// // // // }

// // // // random()
// // // //   // self invoke function

// // // // //   (function (offer) {
// // // // //     alert("sales offer now " + offer + "off");
// // // // //   }
// // // // // )(75);

// // // // // default parameter

// // // // function form(a,b,c,d="no"){
// // // //   console.log("name ",a);
// // // //   console.log("department ",b);
// // // //   console.log("age ",c);
// // // //   console.log("disablity ",d);
// // // // }
// // // // form("kamal","ece",22)


// // // // // generator function

// // // // function*genFun(){
// // // //   yield "try again"
// // // //   yield "best luck try again"
// // // //   yield "your won"
// // // //   yield "try again"
// // // // }

// // // // let finalVal = genFun()

// // // // console.log(finalVal.next().value);
// // // // console.log(finalVal.next().done);
// // // // console.log(finalVal.next());
// // // // console.log(finalVal.next());
// // // // console.log(finalVal.next());


// // // // // callback & higherorder function

// // // // function function1(){
// // // //   console.log("higher order function");
  
// // // // }

// // // // function function2(){
// // // //   console.log("callback function");
  
// // // // }

// // // // function1(function2())


// // // // function add(callback,a,b){ //callback=sub,a=20,b=40
// // // //   console.log(a+b);//60
// // // //   callback(20,20)//sub(20,20)
// // // // }

// // // // function sub(num1,num2){
// // // //   console.log(num1-num2);//0
  
// // // // }


// // // // add(sub,20,40)


// // // // // Es6 edition

// // // // // spread operator

// // // // // array , object

// // // // // [...], {...}

// // // // // merge,clone

// // // // // array

// // // // let arr1 = [1,2,3,4]
// // // // let arr2 = [5,6,7,8]

// // // // let finalVal1 = [...arr1,...arr2,9,10]

// // // // console.log(finalVal1);

// // // // // object

// // // // let obj1 = {
// // // //   ename : "ram",
// // // //   position : "trainee",
// // // //   salary : 10000
// // // // }

// // // // let obj2 = {
// // // //   ename1 : "ram",
// // // //   position1 : "developer",
// // // //   salary1 : 25000

// // // // }
 

// // // // let finalObj = {...obj1,...obj2}

// // // // console.log(finalObj);


// // // // // rest operator

// // // // // function

// // // // // (...)

// // // // // we can multiple argument in single parameter

// // // // function hello(a,b,c,...d){
// // // //   console.log(a+b+c);
// // // //   console.log(d[1]);
  
  
// // // // }

// // // // hello(1,2,3,4,5,6,7,8)

 
 
// // // //  // destracture

// // // //  // normal
// // // //  let fruit = ["apple","banana","cherry"]

// // // //  let firstFruit = fruit[0]
 
 
// // // // //  console.log("the red fruit is",firstFruit);
// // // // //  console.log("100 inr in the fruit",firstFruit);
 
// // // //  // destracture


// // // //  let [c1,c2,c3]=fruit

// // // //   console.log("the red fruit is", c1);
// // // //   console.log("100 inr in the fruit", c2);
 
 
// // // //  let nested = [1,2,3,4,[5,6,[7]]]
 
// // // //  console.log(nested[4][2][0])

// // // //  let [d1,d2,d3,d4,[d5,d6,[d7]]]=nested

// // // //  console.log(d5);
 

// // // //  console.clear();


// // // //  //Array manipulate method

// // // //  // pop() - array last value remove
// // // //  // push() - array last value adding
// // // //  // shift() - array first value remove
// // // //  // unshift() - array first value add
// // // //  // splice()

// // // //  let sample = [1,2,3,4]

// // // //  sample.pop()

// // // //  sample.push(4,5,6,7,8)

// // // //  sample.shift()

// // // //  sample.unshift(0,1)

// // // //  console.log(sample);

// // // //  // splice

// // // //  let sample1 = [1,2,3,4,5]

// // // //  sample1.splice(1,3,20,30,40)// SI,DeleteCount,Adding

// // // //  console.log(sample1);


// // // //  // Array Concat method

// // // //  // concat()

// // // //  let sample2 = [1,2,3,4]
// // // //  let sample3 = [5,6,7.8]

// // // //  let sampleFinalVal = sample2.concat(sample3)

// // // //  console.log(sampleFinalVal);
 

// // // //  // flat()
 
// // // //   let nested1 = [1,2,3,[4,5,6,[7,8,[9]]]]
// // // //   // console.log(nested1[3][3][2][0]);
  
// // // //   // let [d11,d21,d31,[d41,d51,d61,[d71,d81,[d91]]]]=nested1

// // // //   // console.log(d51);

// // // //   let nested1Val = nested1.flat(Infinity)

// // // //   console.log(nested1Val);
   
// // // //  // slice()

// // // //  let sample4 = [1,2,3,4,5]

// // // //  let sample4Val = sample4.slice(1,4)// SI,EI

// // // //  console.log(sample4Val);
 
// // // //  // fill()
// // // // let sample5 = [1,2,3,4]//1,2,"three",4

// // // // sample5.fill("three",2,3)// value,si,ei

// // // // console.log(sample5);


// // // //  // sort()

// // // // let sample6 = ["a","A",3,4,1,6,8,2,9,100,678]

// // // // let sample6Val = sample6.sort()

// // // // console.log(sample6Val);


// // // //  // reverse()

// // // //  let sample7 = [2,3,4,5,6]

// // // //  sample7.reverse()

// // // //  console.log(sample7);
 

// // // //  // includes()
 
// // // //  let sample8 = [10,20,30,40]

// // // //  let sample8Val = sample8.includes(10)

// // // //  console.log(sample8Val);
 


// // // //  // indexof()

// // // //  let sample9 = [10,20,10,30,40]

// // // //  let sample9Val = sample9.indexOf(10,1)//value,SI

// // // //  console.log(sample9Val);
 

// // // //  // lastIndexOf()

// // // //  let sample9Val1 = sample9.lastIndexOf(10,1)

// // // //  console.log(sample9Val1);
 
 
// // // //  console.clear();
 
 
 
// // // //  // Array higher order method

// // // //  // forEach()

// // // //  let toy = ["rc car","uno","dron","puzzle","small toys"]
 
 
// // // //  let storeForEachVal = toy.forEach((cle,i,toA)=>{
  
// // // //   return cle
  
// // // //  })

// // // //  console.log(storeForEachVal);
 


// // // //  // map()

// // // //   let storeMapVal = toy.map((c,i,t)=>{
  
// // // //     return c
  
// // // //  })

// // // //  console.log(storeMapVal);


// // // //  // filter()

// // // //  let employee = [

// // // //   {ename : "a",salary : 100000},
// // // //   {ename : "b",salary : 200000},
// // // //   {ename : "c",salary : 300000},

// // // //  ]

// // // //  let empSalary = employee.filter((c,i,t)=>{
// // // //   return c.salary>=200000
// // // //  })

// // // //  console.log(empSalary);
 
 
// // // //  // find

// // // //  let firstSalaryMember = employee.find((c,i,to)=>{
// // // //   return c.salary >= 200000
// // // //  })

// // // //  console.log(firstSalaryMember);
 

// // // // // reduce

// // // // let totalSalary = employee.reduce((acc,c,i,t)=>{
// // // //   return acc+c.salary
// // // // },0)

// // // // console.log(totalSalary);


// // // // // array higher order function

// // // // // sort

// // // // let randomArr = [3,2,1,5,6,8,600,324]


// // // // let SortVal = randomArr.sort()

// // // // console.log(SortVal);

// // // // let sortHigherOrder = randomArr.sort((a,b)=>{
// // // //   return b-a
// // // // })

// // // // console.log(sortHigherOrder);


// // // // // some - or

// // // //  let checkVal = [2,2,2,4]

// // // //  let someVal = checkVal.some((c,i,t)=>{
// // // //   return c%2==0
// // // //  })

// // // //  console.log(someVal);
 

// // // // // every - and

// // // // let everyVal = checkVal.every((c,i,t)=>{
// // // // return i%2==0
// // // // })

// // // // console.log(everyVal);

 
// // // // console.clear();

// // // // // string methods

// // // // // charAt

// // // // let str = "javascript"

// // // // let strvalCharAt = str.charAt(0)

// // // // console.log(strvalCharAt);

// // // // // charCodeAt

// // // // let charCodeAtVal = str.charCodeAt(1)

// // // // console.log(charCodeAtVal);

// // // // // indexOf

// // // // let indexOfVal = str.indexOf("a")

// // // // console.log(indexOfVal);

// // // // // lastIndexOf

// // // // str = "javascript";

// // // // let lastIndexOfVal = str.lastIndexOf("a")

// // // // console.log(lastIndexOfVal);

// // // // // includes

// // // // let includesVal = str.includes("a")

// // // // console.log(includesVal);

// // // // // repeat

// // // // let repeatVal = str.repeat(5)

// // // // console.log(repeatVal);

// // // // // slice
// // // // str = "javascript"

// // // // let sliceVal = str.slice(4,10)

// // // // console.log(sliceVal);

// // // // // split

// // // // let comic = "i like an iron-man spider-man thor captain"

// // // // let splitVal = comic.split("a")

// // // // console.log(splitVal);

// // // //  // startsWidth

// // // //  str = "javascript";

// // // //  let startsWidthVal = str.startsWith("j")

// // // //  console.log(startsWidthVal);

// // // //  let endsWithVal = str.endsWith("t")

// // // //  console.log(endsWithVal);

// // // //  // trim

// // // //  str = "  java  "

// // // //  let trimVal = str.trim()

// // // //  console.log(trimVal);

// // // //  str = "JaVaSCript" // Javascript

// // // //  let uppercaseVal = str.toUpperCase()

// // // //  console.log(uppercaseVal);

// // // //  let lowercaseVal = str.toLowerCase()

// // // //  console.log(lowercaseVal);

// // // //  console.clear();
 
 

// // // //  // dates

// // // //  let date = new Date()

// // // //  console.log(date);
 
 
// // // //  // get

// // // //  // getFullyear()

// // // //  let fullyear = date.getFullYear()

// // // //  console.log(fullyear);

// // // //  // getmonth()

// // // //  let month = date.getMonth()

// // // //  console.log(month);

// // // //  // getDate()

// // // //  let date1 = date.getDate()

// // // //  console.log(date1);

// // // //  // gatDay()

// // // //  let day = date.getDay()

// // // //  console.log(day);
 

// // // //  // getHours()

// // // //  let hours = date.getHours()

// // // //  console.log(hours);
 

// // // //  // getMinutes()

// // // //  let minutes = date.getMinutes()

// // // //  console.log(minutes);

// // // //  // getSeconds

// // // //  let seconds = date.getSeconds()

// // // //  console.log(seconds);


// // // //  let date11 = new Date()

// // // //  console.log(date11);

// // // //  // set

// // // //  //setfullyear()

// // // //  date11.setFullYear(2003)

// // // //  console.log(date11);
 
// // // //  // setMonth()

// // // //  date11.setMonth(0)

// // // //  console.log(date11);

// // // //  // setDate()

// // // //  date11.setDate(30)

// // // //  console.log(date11);
 
// // // //  // setHours()

// // // //  date11.setHours(11)

// // // //  console.log(date11);
 
// // // //  // setMinutes()

// // // //  date11.setMinutes(50)

// // // //  console.log(date11);
 
 
// // // //  // setSeconds()

// // // //  date11.setSeconds(50)

// // // //  console.log(date11);
 
 

// // // //  // local methods

// // // //  let date12 = new Date()

// // // //  console.log(date12);

// // // //  // toLocaleTimeString

// // // //  let time = date12.toLocaleTimeString()

// // // //  console.log(time);

// // // //  let datess = date12.toLocaleDateString()

// // // //  console.log(datess);


// // // //  let bothDT = date12.toLocaleString()

// // // //  console.log(bothDT);
 
// // // //  console.clear();
 

// // // //  // asynchronous
 

// // // //  // setTimeOut

// // // // //  setTimeout(()=>{
// // // // //    let date14 = new Date();
// // // // //    let time1 = date14.toLocaleTimeString();
// // // // //    console.log(time1);
// // // // //  },2000)

// // // // //  // setIntravel
 

// // // // //  setInterval(()=>{
// // // // //    let date14 = new Date();
// // // // //    let time1 = date14.toLocaleTimeString();
// // // // //    console.log(time1);
// // // // //  },1000)
 

// // // //  // promise

// // // //  fetch("https://fakestoreapi.com/products/")
// // // //  .then((success)=>{
// // // //   return success.json()
// // // //  })
// // // //  .then((data)=>{
// // // //   console.log(data);
// // // //   data.forEach((c)=>{
// // // //     console.log(c.title);
    
// // // //   })
 
// // // //  })

// // // //  .catch((error)=>{
// // // //   console.log(error);
  
// // // //  })

// // // //  console.log("hello");

// // // //  setTimeout(()=>{
// // // //   console.log("how are you");
  
// // // //  },1000)
 


// // // // DOM - Document Object Model

// // // // selecting

// // // // tag select method

// // // // class select method

// // // // id select method


// // // // 1. getElementByTagName

// // // let tag = document.getElementsByTagName("h1")

// // // console.log(tag);


// // // // 2. getElementBYClassName

// // // let class1 = document.getElementsByClassName("one")

// // // console.log(class1);

// // // // 3. getElementById

// // // let id1 = document.getElementById("two")

// // // console.log(id1);


// // // // 4. querySelector()

// // // let tagsname = document.querySelector("li")

// // // console.log(tagsname);

// // // let classname = document.querySelector(".one1")

// // // console.log(classname);

// // // let idName = document.querySelector("#two2")

// // // console.log(idName);




// // // // 5. querySelectorAll()

// // // let liAll = document.querySelectorAll("li")

// // // console.log(liAll);














// // // // traversing

// // // parent selecting method

// //    let child1 = document.querySelector(".child3")
// //    console.log(child1.parentElement);// parentElement
   

// // // child selecting method

// //    let parent = document.querySelector(".parent")

// //    console.log(parent);
// //    console.log(parent.childElementCount);// childElementCount
// //    console.log(parent.children);//children
// //    console.log(parent.firstChild);//firstChild
// //    console.log(parent.firstElementChild);//firstElementChild
// //    console.log(parent.lastChild);//lastChild
// //    console.log(parent.lastElementChild);//lastElementChild

// //    // sibiling selecting method

// //    let child2 = document.querySelector(".child2")

// //    console.log(child2);
// //    console.log(child2.nextSibling); // nextSibiling
// //    let child3 =(child2.nextElementSibling);//nextElementSibling
// //    console.log(child3.nextElementSibling);
// //     console.log(child2.previousSibling);//previousSibling
// //      console.log(child2.previousElementSibling);//previousElementSibling
   



// // // // manipulate

// // let child1 = document.querySelector("#child1")

// // // input --> value

// // // remaining all tag --> innerText,textContent,innerHtml

// // child1.textContent = "hello"


// var input =  document.querySelector("input")
// let button = document.querySelector("button")
// var ol    = document.querySelector("ol")


// function save1(){
// let inputVal = input.value

// // create element

// let li = document.createElement("li")
// var delete1 = document.createElement("button")
// li.classList="add"

// delete1.innerText = "delete"
// delete1.style.border = "2px solid"

// li.innerText = inputVal

// ol.appendChild(li)
// ol.appendChild(delete1)


// delete1.addEventListener("click",()=>{
//     li.remove()
//     delete1.remove()
// })


// }


// select

let button = document.querySelector("button")
let input  = document.querySelector("input")
let ol     = document.querySelector("ol") 

button.addEventListener("click",()=>{
 let inputVal = input.value

 // createElement 

 let li = document.createElement("li")
 let delete1 = document.createElement("button")
 let save = document.createElement("button")
 let span = document.createElement("span")

 input.value = ""

 // delete

 delete1.classList = "red"
 span.innerText = inputVal

 // edit

 save.classList = "green"

 li.appendChild(span)
 li.appendChild(delete1)
 li.appendChild(save)

 ol.append(li)

 delete1.addEventListener("click",()=>{
    li.remove()
 })

 save.addEventListener("click",()=>{

    let input1 = document.createElement("input")
    let save1 = document.createElement("button")
    save1.innerText = "save"
    save1.classList = "bu"
    input1.classList="inp"

    li.appendChild(input1)
    li.appendChild(save1)
    
    save1.addEventListener("click",()=>{
        save1.addEventListener("click",()=>{
            span.innerText = input1.value
            input1.remove()
            save1.remove()
            
        })

    })
 })
 



})





 


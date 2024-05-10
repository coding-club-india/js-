// NAN  ->  is not a datatype  // yeh jaba ata hain jaba ham jabadasti string or no . ko concatinet kare or bah concatinate na ho ya convert na ho to NaN not a number ata hain
// undefined meanse  value does't assign 
// null meanse you assign the value null conditions does't fullfill  another value ya aap yeh batanahi sakte


// prompt by default string value return karta hain
//  jab bhi kisi ki value ko conert karte hain to bah uski ek copy create karke convert karke return karta hain hame use kisi ke inside store karne ke bad use karte hain yadi aap initial value check karenge to bahle jesi hi value hi show karegi

// type conversion 

// let salary = prompt('enter your salry') //enter =5000
// let bonus = 1000;
// console.log(salary +bonus); // 50001000 concatenate the value
// let update salary = Number(salary) // number is a predefinde function to   convert tne value in a integer
// console.log(updateSalary + bonus);// o/p=> 6000 addition task

// type cohersion 

//  system apne aap hi dataype convert karta ho 
// console.log('10'+'23'+3);// 10233
// console.log('10'+'23'-3);// 1020
// console.log('10'-'23'+3);// 16
// console.log('10'*'2'-3);// 17
// console.log('hello'+3);// hello3
// let n = '1'+1
// n= n-1
// console.log(n);//10

//  truthy and falsy valuees  
//  faslsy :- by default false dega -> 0, "" , undefined , null , NaN  

// let  email;
//if(email){
//     console.log(email);
// }                                // ans :- false
// else{
//     console.log('value dal');
// }

// console.log(Boolean(0));//false  no. bala zero 
// console.log(Boolean( ));//false
// console.log(Boolean(""));//false
// console.log(Boolean(null));//false
// console.log(Boolean(NaN));  //false 

// all type value true return

// console.log(Boolean(1)); // true
// string bala zero true return karega


let height = prompt('enter your age')
console.log(height);
if (height)
    {
    console.log(`your enterd height is ${height} this ` );
    }
else{
    console.log('enter age');
    }





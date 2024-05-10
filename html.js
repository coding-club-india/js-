// NAN  ->  is not a datatype  // yeh jaba ata hain jaba ham jabadasti string or no . ko concatinet kare or bah concatinate na ho ya convert na ho to NaN not a number ata hain
// undefined meanse  value does't assign 
// null meanse you assign the value null conditions does't fullfill  another value ya aap yeh batanahi sakte


// prompt by default string value return karta hain
//  jab bhi kisi ki value ko conert karte hain to bah uski ek copy create karke convert karke return karta hain hame use kisi ke inside store karne ke bad use karte hain yadi aap initial value check karenge to bahle jesi hi value hi show karegi

// type conversion=> manual convert karna 
// 
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


// let height = prompt('enter your age')
// console.log(height);
// if (height)
//     {
//     console.log(`your enterd height is ${height} this ` );
//     }
// else{
//     console.log('enter age');
//     }


// Boolean operator And OR Not && || !

let hasdrive = true;
let goodVision = false;

// // console.log(hasdrive&&goodVision);
// // console.log(hasdrive||goodVision);
// // console.log(!hasdrive);

// if(hasdrive&&goodVision)
//     console.log('drive kar');
// else
// console.log('tu ren de');

// if(hasdrive||goodVision)
//     console.log('drive kar');
// else
// console.log('tu ren de');

// if(!goodVision)
//     console.log('drive kar');
// else
// console.log('tu ren de');

// if(hasdrive&&goodVision||goodVision)  //tue
//     console.log('drive kar');
//     else
// console.log('rehne dde');


//  values 
// let one = (96+108+89)/3;

// let onek= (88 +91+110)/3

// let two = (97+112+101)/3;

// let twok= (109 +95+123)/3

// let three = (97+112+101)/3;

// let threek= (109 +95+106)/3

// console.log(three);
// console.log(threek);  // false win  draw

// if(two>twok&& two>100){
//   console.log("two is winner" , two);
// }
// else if(two<twok&& twok>100){
//     console.log("twok is winner",twok);
//   }
// else if(two==twok&& two>100 && twok>100){
//     console.log("Draw");
//   }
// else{
//     console.log("all team fail");
//   }


// switch case
// let day = prompt('enter the day')

// switch (day) {
//     case 'monday':
//     console.log('enjaoy'); 
//      break;
//      case 'monday':
//         console.log('enjaoy'); 
//          break;
//      case 'wednesday':
//     case 'thursday':
//      console.log('enjaoy meri jaan'); 
//     break;
        

//     default:
//         console.log('please enter the valid day');
//         break;
// }


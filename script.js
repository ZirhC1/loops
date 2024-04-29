// // ex. hello world x 25

// //create a loop that rus 25 times
// // var i = 0; // control variable - controls when loop breaks

// // while (i < 25) {
// //   console.log(i);
// //   i++; //increase i by 1. This is known as the "incrementor"
// // }

// //all looops ned 3 things:
// //1. contorl variable. e.g car 1 = 0
// //2. loop condition. e.g. i < 25. should ALWAYS start true, eventually become false. (x) this check.
// //3. increment the control variable, other INFINITE loop!

// // //Ex. 0 - 99
// // let i = 0;
// // while (i < 100) {
// //   console.log(i);
// //   i++;
// // }

// // //Ex. 99 to 0
// // let i = 99;
// // while (i >= 0) {
// //   console.log(i);
// //   i--;
// // }

// // let userWord;

// // while (userWord != "STOP") {
// //   userWord = prompt("Type STOP to break the loop");
// // }

// // alert("Thanks for typing stop.");

// //print all odd numbers from 50 - 100

// // let j = 50
// // while (j <= 100){

// //     if(j % 2 == 1){
// //         console.log(j)
// //     }
// //    j++
// // }

// // 3 % 2 = 1
// // 11 % 2 = 1
// // //that pecent symbol is used to input the remainder of a problem solved and divided

// let m = 51;
// while (m <= 100) {
//   console.log(m);
//   m += 2; //same as m = m +2
// }

//DO QUESTIONS 10 - 16 ON QUESTION MD

// //Q10
// let a = 0;

// while (a <= 4) {
//   console.log(a);
//   a++;
// }

//Q11
// let b = 5;

// while (b <= 15) {
//   console.log(b);
//   b++;
// }

//Q12
// let c = 0;
// while (c <= 10) {
//   console.log(c);
//   c += 2;
// }

// // //Q13
// let d = 1;
// while (d <= 10) {
//   console.log(d);
//   d += 2;
// }

// //Q14
// let e = 10;
// while (e >= 0) {
//   console.log(e);
//   e--;
// }

//Q15
// let f = 10;
// while (f >= 0) {
//   if (f == 5) {
//     f = 4;
//   }
//   console.log(f);
//   f--;
// }

// //Q16
// let g = 1;
// let output;
// while (g <= 100) {
//   if (g % 3 == 0) {
//     output = "Fizz(3)";
//   } else if (g % 5 == 0) {
//     output = "Buzz(5)";
//   } else if (g % 5 == 0 && g % 3 == 0) {
//     output = "Fizz(3)Buzz(5)";
//   } else {
//     output = g;
//   }
//   console.log(output);

//   g++;
// // }

// let userWord;
// do {
//   userWord = prompt("type STOP");
// } while (userWord != "STOP");

// //fix the infinite loop
// var num = -1;
// while (num < 0) {
//   num += 3;
// }

//Ex. prompter user selects numbers 4 and 10
// users 3rd number must fall between 4 and 10

// let min = +prompt("Enter MIN value");
// let max = +prompt("Enter MAX value");
// let UserNum;

// do {
//   UserNum = +prompt(`Enter a value between ${min} and ${max}`);
// } while (UserNum < min || UserNum > max);
// alert("Thank you")

//ex. Break statement
// let num;
// while (true) {
//   num = +prompt("Enter a value between 1 and 10");
//   if (num >= 1 && num <= 10) {
//     break;
//   }
//   alert("thank YOU");
// }

// //Ex. 25 to 1, skip 18 and 7
// let counter = 25;
// while (counter >= 1) {
//   counter--;
//   if (counter == 18 || counter == 7) {
//     continue; // continue allows for the variable to continue(in this case it skips 18 and 7)
//   }
//   console.log(counter);
// }

//Ex average calculator
// let numOfValues = 0;
// let sum = 0;
// let userNum;

// while (true) {
//   userNum = +prompt("Enter a value (0 to quit)");

//   if (userNum == 0) {
//     break;
//   }

//   //if code gets here, user has entered a good value
//   sum = sum + userNum;
//   console.log(sum);
//   numOfValues++; //tracks how many values user types
// }

// let average = sum / numOfValues;
// average = average.toFixed(1);

// alert(`The average is ${average}`);

//EX 1. //WRITE CODE THAT WILL LOG TO THE CONSOLE, "HELLO" 800 TIMES
// let HELLO = 0;
// let helloWorld = "HELLO WORLD!";
// while (HELLO <= 799) {
//   HELLO++;
//   console.log("HELLO WORLD");
// }

//EX 2. //WRITE CODE THAT WILL LOG TO THE CONSOLE ALL OF THE MULIPLES OF 5 FROM 20 TO 500
let userNum = 20;
while (userNum <= 500) {
  userNum++;

  if (userNum % 1 || userNum % 2 || userNum % 3 || userNum % 4) {
    continue;
  }
  console.log(userNum);
}

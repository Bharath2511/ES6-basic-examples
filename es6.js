/*feel free to play with the below code*/


//replacing var keyword with let keyword
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

  console.log(`${quote}`)
}

catTalk();
//functionality of let keyword try the same program using var 
//keyword you will notice the difference
function checkScope() {
    "use strict";
      let i = "function scope";
      if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
    }

    //using const and let inside a block
    function printManyTimes(str) {
        "use strict";
      
        // change code below this line
      
        
        for(let i = 0; i < str.length; i+=2) {
          const SENTENCE = str + " is cool!";
          console.log(SENTENCE);
        }
      
        // change code above this line
      
      }
      printManyTimes("javaScript");

//mutating principle using const
const s = [5, 7, 2];
    function editInPlace() {
  "use strict";
  // change code below this line

  s[0] = 2
  s[1] = 5
  s[2] = 7
  console.log(s)


  // change code above this line
}
editInPlace();

// //using Object.freeze() method 
// function freezeObj() {
//     "use strict";
//     const MATH_CONSTANTS = {
//       PI: 3.14
//     };
//     // change code below this line
//   Object.freeze(MATH_CONSTANTS)
  
//     // change code above this line
//     try {
//       MATH_CONSTANTS.PI = 99;
//     } catch( ex ) {
//       console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
//   }
//   const PI = freezeObj();


  //replacing anonymous functions with arrow functions
  const magic = () => {
    "use strict";
     return new Date();
  }
  ;
  magic()

//passing arguments into an arrow function
  const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
  // test your code
  console.log(myConcat([1, 2], [3, 4, 5]));


  //using higher order functions and arrow functions
  const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers =  arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//adding default parameters to a function
const increment = (function() {
    "use strict";
    return function increment(number, value=1) {
      return number + value;
    };
  })();
  console.log(increment(5, 2)); // returns 7
  console.log(increment(5)); // returns 6


//  ES6: Use the Rest Operator with Function Parameters
// In order to help us create more flexible functions, 
// ES6 introduces the rest operator for function parameters. 
// With the rest operator,
//  you can create functions that take a variable number of arguments.
//  These arguments are stored in an array that can be accessed later from inside the function.
const sum = (function() {
    "use strict";
    return function sum(...args) {
      //const args = [ x, y, z ];
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3, 4)); // 6

  //spread operators
  const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
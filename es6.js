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

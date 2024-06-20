"use strict";
/*22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/
Object.defineProperty(exports, "__esModule", { value: true });
let fruits = [' Apple ', ' Mango ', ' Banana ', ' orange '];
console.log(`I can't access the index of an array: ${fruits[6]}`);
console.log(`Now I catch the error. Let's print the correct index: ${fruits[1]}`);

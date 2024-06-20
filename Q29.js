"use strict";
/*29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
Object.defineProperty(exports, "__esModule", { value: true });
let favorite_fruits = ["strawberry", "pineapple", "cherry"];
if (favorite_fruits.includes("apple")) { // don't execute
    console.log(`I really like apple!`);
}
else {
    console.log(`apple is not in an array.`);
}
if (favorite_fruits.includes("strawberry")) {
    console.log("I really like strawberries!");
}
if (favorite_fruits.includes("mango")) { // don't execute
    console.log("I really like mango!");
}
else {
    console.log(`mango is not in an array.`);
}
if (favorite_fruits.includes("cherry")) {
    console.log("I really like cherries!");
}
if (favorite_fruits.includes("pineapple")) {
    console.log("I really like Pine Apple!");
}

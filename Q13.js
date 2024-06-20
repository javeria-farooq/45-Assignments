"use strict";
/*13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
Object.defineProperty(exports, "__esModule", { value: true });
let vehicles = ["Honda motorcycle", "alto Car", "fortuner", "lexus"];
// console.log(`I like to transport on ${transportation[0]}.`);
// console.log(`My brother likes : ${transportation[1]}.`);
// console.log(`Now a days Everyone has wish to purchase ${transportation[2]}.`);
// console.log(`${transportation[3]} is also a best transportation.`);
vehicles.map((vehicle) => {
    console.log(`“I would like to own a ${vehicle}.”`);
});

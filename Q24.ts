/*24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

// string comparison tests:
console.log(`"Hello" !== "hello" : ${"hello" !== "hello"}`); // false
console.log(`"biryani === biryani" : ${"biryani" === "biryani"}`); // true

// lowerCase testing
console.log(`test 1: ${"Hello".toUpperCase() === "hello"}`); // false
console.log(`test 2: ${"javeria".toUpperCase() === "JAVERIA"}`);// true

// numerical testing
console.log(`5 === 5: ${5 === 5}`); // true
console.log(`3 !== 3: ${3 !== 3}`); //false

console.log(`8 > 9: ${8 > 9}`); // false
console.log(`10 < 9: ${10 < 9}`); // false

console.log(`8 >= 8: ${8 >= 8}`); // true
console.log(`60 <= 50: ${60 <= 50}`); // false
//true
console.log(`"javeria" === "javeria" && 20 === 20: ${"javeria" === "javeria" && 20 === 20}`);
console.log(`"tikka" !== "tikka" || "biryani" !== "biryani": ${"tikka" !== "tikka" || "biryani" !== "biryani"}`); // false

console.log(`true && false: ${true && false}`); // false
console.log(`false || false: ${false || false}`); // false

let fruits : string[] = ["apple", "mango", "strawberry"]
console.log(`array has pineapple: ${fruits.includes("pineapple")}`); // false
console.log(`array has strawberry: ${fruits.includes("strawberry")}`); // true
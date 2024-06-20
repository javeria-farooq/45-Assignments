"use strict";
/*18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
Object.defineProperty(exports, "__esModule", { value: true });
let locations = [" Makkah ", " Madinah ", " Phalestinne ", " Iran ", " Afghanistan "];
console.log(`original order: ${locations}`); // original
// sorted
let sortedLocations = [...locations].sort();
console.log(`Alphabetical order: ${sortedLocations}`); // alphabetical
console.log(`original array: ${locations}`); // original array
let reverseSorted = [...locations].sort().reverse();
console.log(`Reverse alphabetical order: ${reverseSorted}`); // reverse alphabetical
console.log(`original array: ${locations}`); // original array
console.log(`\n"Modifying Original Array"\n`);
locations.reverse(); // original array reversing
console.log(`Reversed Original: ${locations}`);
locations.reverse(); //original array back to it's order
console.log(`Back to it's order again by reversing: ${locations}`);
locations.sort(); // original array sorting
console.log(`Sorted original array: ${locations}`);
locations.reverse(); // Reverse alphabetical order in original array
console.log(`Reverse Alphabetical Original array: ${locations}`);

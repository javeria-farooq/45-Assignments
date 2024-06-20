/*16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/

let guests : string [] = [" javeria ", " aliza ", " yasmeen ", " afnan ",  " farooq"]
console.log(guests); // guest array
// message
let message : string = "You are invited to a dinner."
// map
guests.map((guest) => {
    console.log(`Dear ${guest}! ${message}`);
})
// can't attend
let notAttend : string = " javeria "
console.log(`${notAttend} can't attend for dinner.`);
// new guest
let newGuest : string = " rizwana "
console.log(`Now! we have a new guest: ${newGuest}`);
// modify list
guests[guests.indexOf(notAttend)] = newGuest
console.log(guests);
// map
guests.map((guest) => {
    console.log(`Dear ${guest}! You are co-ordinally invited to a dinner.`);
})
// bigger table msg
console.log(`\n"Dear Guests! I have found a bigger dinner table."\n`);
// append elements
guests.unshift(" Hurain ") //begining
guests.push(" Ameer Hamza ") // end
let middleIdx = guests.length/2
guests.splice(middleIdx, 0, " Huriya ") // middle

console.log(`${guests}`);
// map
guests.map((guest) => {
    console.log(`Dear ${guest}! ${message}`);
})
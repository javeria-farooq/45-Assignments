/*17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

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

console.log(guests);
// map
guests.map((guest) => {
    console.log(`Dear ${guest}! ${message}`);
})
//            /// Q: 17
// bigger table msg
console.log(`\n"Dear Guests! Sorry to say but I can invite only 2 peoples for dinner"\n`);

for(let i = guests.length; i > 2; i--) {
    let removeGuest = guests.pop()
    console.log(`Sorry ${removeGuest}! I can't invite you at a dinner.`);
}

guests.map((guest) => {
    console.log(`${guest}! You are still invited.`);
})

for(let i = guests.length; i > 0; i--) {
    guests.pop()
}

console.log("Final list: ", guests);

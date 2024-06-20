/*15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it. • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. • Print a second set of invitation messages, one for each person who is still in your list.*/
// guest array:
let guests : string [] = ["javeria", "aliza", "afnan", "yasmeen",  "farooq"]
console.log(`${guests} have invited`);
// msg
let message : string = "You are invited to a dinner"
// map
guests.map((guest) => {
    console.log(`Dear ${guest}! ${message}`);
})
// can't attend
let notAttend : string = "javeria"
console.log(`${notAttend} can't attend for dinner`);
// new guest
let newGuest : string = "rizwana"
console.log(`Now! we have a new guest: ${newGuest}`);
// modify
guests[guests.indexOf(notAttend)] = newGuest
// map
guests.map((guest) => {
    console.log(`Dear ${guest}! ${message}`);
})
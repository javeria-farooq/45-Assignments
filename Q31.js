"use strict";
/*31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = [];
if (usernames.length > 0) {
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === "admin") {
            console.log(`hello ${usernames[i]}, Would you like check status report?`);
        }
        else {
            console.log(`hello ${usernames[i]}`);
        }
    }
    usernames = [];
    console.log(usernames);
}
if (usernames.length === 0) {
    console.log(`we need to find some users.`);
}

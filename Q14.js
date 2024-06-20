"use strict";
/*14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["javeria", "aliza", "afnan", "yasmeen", "farooq"];
let message = "You are invited to a dinner";
guests.map((guest) => {
    console.log(`Dear ${guest}! ${message}`);
});

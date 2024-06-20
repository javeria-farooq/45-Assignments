"use strict";
/*27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
Object.defineProperty(exports, "__esModule", { value: true });
// green alien: 5 pts
let alien_color = "green";
if (alien_color === "green") {
    console.log(`the player earned 5 points for shooting ${alien_color} alien.`);
}
else {
    console.log(`unknown alien color`);
}
// yellow alien: 10 pts
alien_color = "yellow";
if (alien_color === "yellow") {
    console.log(`the player earned 10 points for shooting ${alien_color} alien.`);
}
else {
    console.log(`unknown invalid alien color`);
}
// red alien: 15 pts
alien_color = "red";
if (alien_color === "red") {
    console.log(`the player earned 15 points for shooting ${alien_color} alien.`);
}
else {
    console.log(`unknown invalid alien color`);
}

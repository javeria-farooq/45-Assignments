"use strict";
/*42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
let magician_names = ["javeria", "aliza", "afnan"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`${magicians[i]} The Great`);
    }
}
function show_magicians() {
    make_great(magician_names);
}
show_magicians();
/*it's my method */
/*let magician_names : string [] = ["javeria", "aliza", "afnan"]

function make_great(item : string []) {
    for(let i = 0; i < item.length; i++) {
        console.log(`the great ${item[i]}`);
    }
}

function show_magicians(magicians : string[]) {
    make_great(magicians)
}

show_magicians(magician_names)*/ 

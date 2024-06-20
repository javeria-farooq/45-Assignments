"use strict";
/*44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
Object.defineProperty(exports, "__esModule", { value: true });
function sandwich(...items) {
    if (items.length === 0) {
        console.log(`\nNo items selected. Please choose some ingredients for your sandwich.`);
    }
    else {
        console.log(`\nSandwich Menu:`);
        items.forEach((item) => {
            console.log(` - ${item}`);
        });
        console.log(`Enjoy Your Sandwich!`);
    }
}
sandwich("BBQ", "chicken");
sandwich("Tikka", "mayo sauce", "fries");
sandwich();

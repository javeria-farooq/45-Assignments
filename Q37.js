"use strict";
/* 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", msg = "I love TypeScript.") {
    console.log(`I am making ${size} T-shirts with the message of ${msg}`);
}
make_shirt(); // large & love TS
make_shirt("medium"); // medium & love TS
make_shirt("small", "keep coding"); // small & differ msg
make_shirt("XXL", "hello TypeScript!");

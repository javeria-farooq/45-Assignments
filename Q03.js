"use strict";
/*Q: 03 */
Object.defineProperty(exports, "__esModule", { value: true });
let userName = "jaVerIa farOoQ";
console.log(`original variable = ${userName}`);
console.log(`lowercase = ${userName.toLowerCase()}`); //lowercase
console.log(`uppercase = ${userName.toUpperCase()}`); //uppercase
console.log(`title case = ${userName.charAt(0).toUpperCase() + userName.slice(1, 8).toLowerCase() + userName.charAt(8).toUpperCase() + userName.slice(9).toLowerCase()}`); //titlecase

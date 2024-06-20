"use strict";
/*20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.*/
Object.defineProperty(exports, "__esModule", { value: true });
let mountains = [" Nanga Parbat", " K2 ", " Himaliya ", " Hindu Kush "];
let rivers = [' Indus ', ' Jhelum ', ' Chenab ', ' Ravi ', ' Satlej ', ' Kabul '];
let languages = [' Sindhi ', ' Urdu ', ' Gujrati ', ' Punjabi ', ' Pashto ', ' English '];
// mountains
console.log(` \n"Mountains List in Pakistan"`);
mountains.forEach((mountain) => {
    console.log(` -${mountain}`);
});
// Rivers
console.log(` \n"Rivers List in Pakistan"`);
rivers.forEach((river) => {
    console.log(` -${river}`);
});
// Languages
console.log(` \n"Languages List in Pakistan"`);
languages.forEach((language) => {
    console.log(` -${language}`);
});

/*21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/

let user : {
    fname: string,
    lname : string,
    age : number,
    isStu : boolean,
} = {
    fname : "javeria",
    lname : "farooq",
    age : 12,
    isStu : true
}

console.log("user = ");
console.log(user);
user.fname = "aliza"
console.log(user);
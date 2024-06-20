/*41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/

let magician_names : string [] = ["javeria", "aliza", "afnan"]

function show_magicians(magicians : string []) : void {
    for(let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

show_magicians(magician_names)
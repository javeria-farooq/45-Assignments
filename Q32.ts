/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let current_users: string [] = ["admin", "javeria", "aliza", "yasmeen", "rizwana"] //j
let new_users : string [] = ["john", "eric", "javeria", "alice", "ALIZA"]; // i

for(let i = 0; i < new_users.length; i++) {
    const newUserIdx  = new_users[i]
    let isTaken = false
    for(let j = 0; j < current_users.length; j++) {
        const currUserIdx = current_users[j]
        if(newUserIdx.toLowerCase() === currUserIdx.toLowerCase()) {
            isTaken = true
            break
        }
    }

    if(isTaken === true) {
        console.log(`sorry! ${newUserIdx} is not available.`);
    }

    else{
        console.log(`congratulations ${newUserIdx}! Your username is perfect.`);
    }
}
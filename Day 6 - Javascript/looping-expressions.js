// Control Flow Structure
// Conidtional statement

let age = 18;

//if statement
if (age >= 18) {
    console.log("You are eligible to vote")
 } else {
    console.log("You are not eligible to vote");
 }


//  if-else else-if statement
let temperature = 27;
if (temperature <0) {
    console.log("It is freezing!");
} else if (temperature >= 0 && temperature < 20) {
    console.log("It is cool outrside.")
} else if (temperature >= 20 && temperature < 26) {
    console.log("It's warm outside");
} else {
    console.log("It's hot!");
}

// switch statement
let day = 'Monday'
switch (day) {
    case 'Monday':
        console.log("It's the start of the week");
        break;
    case 'Friday':
        console.log("It is the end of the week");
        break;
    default:
            console.log("It is just a regular day");
            break
}

let number = 30;

switch (true) {
    case (number >= 0 && number <= 50):
        console.log("Number is between 0 and 50");
        break;
    case (number > 50 && number <= 100):
        console.log("Number is between 51 and 100");
        break;
    case (number > 150 && number <= 200):
        console.log("Number is between 51 and 100");
        break;
            
    default:
        console.log("Number is either negative or greater than 100");
}
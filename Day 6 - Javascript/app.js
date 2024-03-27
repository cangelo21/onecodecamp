// Functions - allows us to write reusable blocks of code

// Defining a function
function greet () {
    console.log("Hello World!");
    console.log("Hello Philippines!");
}

// Calling a funtion
greet();


// Function with Parameter
function greetMe(name) {
    console.log('Hello, ', name);
}
 
greetMe('Carlo'); //Argument


// Function with return
function sum(a, b) {
    console.log("Log me please.")
    return a + b;
    console.log("Log me please.")
}

console.log('Sum', sum(5, 8));





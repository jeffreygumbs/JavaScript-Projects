// Global variable
var globalVar = "I am a global variable";

// Function demonstrating local variable and intentional error
function localScopeFunction() {
    // Local variable
    var localVar = "I am a local variable";
    
    // Log both variables to show scope
    console.log("Global variable inside function: " + globalVar);
    console.log("Local variable inside function: " + localVar);

    // Intentional error: trying to use an undefined variable
    try {
        console.log("Attempting to use undefined variable: " + undefinedVar);
    } catch(err) {
        console.log("Error caught: " + err.message);
    }
}

// Try to access local variable outside its scope (will cause error)
console.log("Global variable outside function: " + globalVar);
console.log("Attempting to access local variable outside function: " + localVar); // This will cause an error

// Call the function
localScopeFunction();

// Time-based greeting function
function getTime() {
    var hour = new Date().getHours(); // Get current hour
    var greeting;
    
    // Set greeting based on time of day
    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    
    // Display the greeting in the HTML element
    document.getElementById("Time_of_day").innerHTML = greeting + " It is currently " + hour + ":00";
}

// Custom if statement function to check if a number is prime
function checkPrime(number) {
    // Check if number is less than 2 (not prime)
    if (number < 2) {
        console.log(number + " is not a prime number");
        return;
    }
    
    // Check if number is 2 (prime)
    if (number === 2) {
        console.log(number + " is a prime number");
        return;
    }
    
    // Check if number is even (not prime, except 2)
    if (number % 2 === 0) {
        console.log(number + " is not a prime number");
        return;
    }
    
    // Check for divisibility up to square root of number
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            console.log(number + " is not a prime number");
            return;
        }
    }
    
    console.log(number + " is a prime number");
}

// Test the function with different numbers
console.log("Testing prime numbers:");
checkPrime(7);    // prime
checkPrime(12);   // not prime
checkPrime(23);   // prime
checkPrime(1);    // not prime

// Age verification function with if/else statement
function checkAge() {
    // Get the age value from input
    var age = document.getElementById("age_input").value;
    
    // Check if age is valid for voting
    if (age >= 18) {
        document.getElementById("age_result").innerHTML = 
            "Congratulations! You are " + age + " years old and can vote!";
    } else {
        document.getElementById("age_result").innerHTML = 
            "Sorry, you are " + age + " years old and cannot vote yet.";
    }
}

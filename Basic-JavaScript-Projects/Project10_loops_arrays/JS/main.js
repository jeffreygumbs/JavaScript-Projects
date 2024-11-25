// While Loop Function
// This function demonstrates a while loop that counts from 0 to 10
function Call_Loop() {
    let text = "";  // Initialize empty string for output
    let count = 0;  // Initialize counter
    
    // While loop continues until count reaches 11
    while (count < 11) {
        text += "The number is " + count + "<br>";  // Add current number to output
        count++;  // Increment counter
    }
    
    // Display the final count sequence
    document.getElementById("Loop").innerHTML = text;
}

// For Loop Function with Array
// This function demonstrates both a for loop and array usage
function for_Loop() {
    // Array declaration - list of musical instruments
    const instruments = ["Guitar", "Piano", "Drums", "Bass", "Violin"];
    let listContent = "";  // Initialize empty string for output
    
    // For loop iterates through each element in the instruments array
    for (let i = 0; i < instruments.length; i++) {
        listContent += instruments[i] + "<br>";  // Add each instrument to output
    }
    
    // Display the list of instruments
    document.getElementById("List_of_Instruments").innerHTML = listContent;
}

// Let Keyword Demonstration
// This function shows how let creates block-scoped variables
function let_Example() {
    let x = 10;  // Variable x in function scope
    
    {
        let x = 20;  // New x variable in block scope, different from outer x
        document.getElementById("Let_Demo").innerHTML = "Inside block: x = " + x;
    }
    
    // Show that outer x maintained its original value
    document.getElementById("Let_Demo2").innerHTML = "Outside block: x = " + x;
}

// Object Creation with Let
// This function demonstrates creating and using an object with properties and methods
function object_Example() {
    // Create car object using let keyword
    let car = {
        make: "Toyota",      // Car manufacturer
        model: "Camry",      // Car model
        year: 2023,          // Model year
        color: "Silver",     // Car color
        // Method to create a description of the car
        description: function() {
            return "This car is a " + this.year + " " + this.color + " " 
                   + this.make + " " + this.model + ".";
        }
    };

    // Display the car description using the object's method
    document.getElementById("Car_Object").innerHTML = car.description();
}

// Initialize all examples when page loads
window.onload = function() {
    let_Example();      // Run let keyword example
    object_Example();   // Run object example
};

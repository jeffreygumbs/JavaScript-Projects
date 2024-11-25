// Ternary operator function
function Ride_Function() {
    // Get the age value from the input element with id "Age"
    var age = document.getElementById("Age").value;
    
    // Use a ternary operator to determine if the person can vote based on their age
    var canVote = (age >= 18) ? "You are old enough to vote!" : "You are not old enough to vote!";
    
    // Display the result in the paragraph element with id "Vote"
    document.getElementById("Vote").innerHTML = canVote;
}

// Constructor function for Vehicle
function Vehicle(Make, Model, Year, Color) {
    // Properties of the Vehicle object
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Function to create a new vehicle and display its properties
function myFunction() {
    // Create a new Vehicle object using the constructor
    var myVehicle = new Vehicle("Toyota", "Camry", 2023, "Blue");
    
    // Display the vehicle information in the paragraph element with id "New_and_This"
    document.getElementById("New_and_This").innerHTML = 
        "My vehicle is a " + myVehicle.Vehicle_Color + " " + 
        myVehicle.Vehicle_Year + " " + myVehicle.Vehicle_Make + 
        " " + myVehicle.Vehicle_Model;
}

// Nested function example
function count_Function() {
    // Call the nested function count() and display the result in the paragraph element with id "Nested_Function"
    document.getElementById("Nested_Function").innerHTML = count();
    
    // Nested function count()
    function count() {
        // Initialize a variable starting_point to 9
        var starting_point = 9;
        
        // Nested function plus_one() that increments starting_point by 1
        function plus_one() {starting_point += 1;}
        
        // Call the plus_one() function
        plus_one();
        
        // Return the updated starting_point value
        return starting_point;
    }
}

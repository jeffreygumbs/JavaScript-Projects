// Create a dictionary (object) with car information
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    color: "Silver",
    mileage: 15000,
    condition: "Excellent"
};

// Function to display car information when clicked
function displayCarInfo() {
    // Store the color value before deleting it
    const deletedColor = car.color;
    
    // Delete the color property from the car dictionary
    delete car.color;
    
    // Display information about the deleted value
    document.getElementById("Dictionary").innerHTML = 
        "The color '" + deletedColor + "' has been deleted from the car dictionary. " +
        "Now car.color is: " + car.color + " (undefined)";
}

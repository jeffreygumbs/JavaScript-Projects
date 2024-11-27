/**
 * Pizza Ordering System JavaScript
 * This file handles all the logic for the pizza ordering system including
 * price calculations, order summary generation, and form management.
 */

/**
 * Initializes the order process and calculates the base price for the pizza size
 * Creates the beginning of the order summary with the selected size
 * @returns {void}
 */
function getReceipt() {
    // Initialize variables for order summary and pricing
    let text1 = "<h3>Your Order:</h3><ol>";
    let runningTotal = 0;
    let sizeTotal = 0;
    // Get all size selection elements
    let sizeArray = document.getElementsByClassName("size");

    // Loop through size options to find selected size
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            let selectedSize = sizeArray[i].value;
            // Add selected size to order summary with price
            text1 = text1 + "<li class='order-item'>" + selectedSize + " ($" + getSizePrice(i) + ".00)</li>";
        }
    }

    // Calculate price based on selected size
    if (sizeArray[0].checked) { // Personal Pizza
        sizeTotal = 6;
    } else if (sizeArray[1].checked) { // Small Pizza
        sizeTotal = 8;
    } else if (sizeArray[2].checked) { // Medium Pizza
        sizeTotal = 10;
    } else if (sizeArray[3].checked) { // Large Pizza
        sizeTotal = 14;
    } else if (sizeArray[4].checked) { // Extra Large Pizza
        sizeTotal = 16;
    }

    // Set initial running total to size price
    runningTotal = sizeTotal;
    console.log("Base price for size: $" + runningTotal + ".00");
    // Proceed to topping selection
    getTopping(runningTotal, text1);
}

/**
 * Helper function to get the price for each pizza size
 * @param {number} index - Index of the selected size
 * @returns {number} - Price for the selected size
 */
function getSizePrice(index) {
    const prices = [6, 8, 10, 14, 16]; // Prices for each size option
    return prices[index];
}

/**
 * Calculates the final price including toppings and generates the complete order summary
 * @param {number} runningTotal - Current total from size selection
 * @param {string} text1 - Current order summary HTML
 * @returns {void}
 */
function getTopping(runningTotal, text1) {
    // Initialize variables for topping calculations
    let toppingTotal = 0;
    let selectedTopping = [];
    // Get all topping selection elements
    let toppingArray = document.getElementsByClassName("toppings");

    // Loop through toppings to find selected ones
    for (let j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            // Add selected topping to order summary
            text1 = text1 + "<li class='order-item'>" + toppingArray[j].value + "</li>";
        }
    }

    // Calculate topping price (first topping is free)
    let toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        // Charge for additional toppings beyond the first one
        toppingTotal = (toppingCount - 1);
        text1 += "<li class='order-item price-info'>First topping: FREE</li>";
        text1 += "<li class='order-item price-info'>Additional toppings: $" + toppingTotal + ".00</li>";
    } else if (toppingCount === 1) {
        // If only one topping, it's free
        text1 += "<li class='order-item price-info'>First topping: FREE</li>";
    }

    // Close the ordered list
    text1 += "</ol>";
    // Add topping cost to running total
    runningTotal = runningTotal + toppingTotal;

    // Log order details for debugging
    console.log("Number of toppings: " + toppingCount);
    console.log("Topping cost: $" + toppingTotal + ".00");
    console.log("Final Total: $" + runningTotal + ".00");
    
    // Update the display with order summary and total price
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: $" + runningTotal + ".00</h3>";
}

/**
 * Resets the order form and clears the display
 * @returns {void}
 */
function resetForm() {
    // Reset all form inputs
    document.getElementById("frmMenu").reset();
    // Clear order summary and total price
    document.getElementById("showText").innerHTML = "";
    document.getElementById("totalPrice").innerHTML = "";
}

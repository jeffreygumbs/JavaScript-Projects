// Initialize variables to store running total and final price
function getReceipt() {
    let text1 = "<h3>Your Order:</h3><ol>";
    let runningTotal = 0;
    let sizeTotal = 0;
    let sizeArray = document.getElementsByClassName("size");

    // Get selected pizza size
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            let selectedSize = sizeArray[i].value;
            text1 = text1 + "<li class='order-item'>" + selectedSize + " ($" + getSizePrice(i) + ".00)</li>";
        }
    }

    // Calculate price based on size
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

    runningTotal = sizeTotal;
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal, text1);
}

// Helper function to get size price
function getSizePrice(index) {
    const prices = [6, 8, 10, 14, 16];
    return prices[index];
}

// Calculate toppings price
function getTopping(runningTotal, text1) {
    let toppingTotal = 0;
    let selectedTopping = [];
    let toppingArray = document.getElementsByClassName("toppings");

    // Get selected toppings
    for (let j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            text1 = text1 + "<li class='order-item'>" + toppingArray[j].value + "</li>";
        }
    }

    // Calculate toppings cost
    let toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
        text1 += "<li class='order-item price-info'>First topping: FREE</li>";
        text1 += "<li class='order-item price-info'>Additional toppings: $" + toppingTotal + ".00</li>";
    } else if (toppingCount === 1) {
        text1 += "<li class='order-item price-info'>First topping: FREE</li>";
    }

    text1 += "</ol>";
    runningTotal = runningTotal + toppingTotal;

    // Display order summary
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: $" + runningTotal + ".00</h3>";
}

// Reset the form
function resetForm() {
    document.getElementById("frmMenu").reset();
    document.getElementById("showText").innerHTML = "";
    document.getElementById("totalPrice").innerHTML = "";
}

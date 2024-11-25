// Using concat() method to connect multiple strings
function concatenateStrings() {
    var part1 = "Hello";
    var part2 = " beautiful";
    var part3 = " world!";
    
    // Concatenate all three strings
    var fullString = part1.concat(part2, part3);
    
    // Display the concatenated string
    document.getElementById("concatenation").innerHTML = fullString;
}

// Using slice() method to extract part of a string
function sliceString() {
    var sentence = "The quick brown fox jumps over the lazy dog";
    var slicedText = sentence.slice(4, 19); // Will extract "quick brown fox"
    
    // Display the sliced string
    document.getElementById("slice_result").innerHTML = 
        "Original text: " + sentence + "<br>" +
        "Sliced text (4,19): " + slicedText;
}

// Using toString() method to convert a number to a string
function numberToString() {
    var number = 123.456;
    var numberAsString = number.toString();
    
    // Display the original number and its string version along with their types
    document.getElementById("to_string_result").innerHTML = 
        "Original number: " + number + " (type: " + typeof number + ")<br>" +
        "As string: " + numberAsString + " (type: " + typeof numberAsString + ")";
}

// Using toPrecision() method to format a number to a specified length
function precisionNumber() {
    var number = 123.456789;
    
    // Format the number to different precisions
    var precision3 = number.toPrecision(3);  // Returns 3 significant digits
    var precision5 = number.toPrecision(5);  // Returns 5 significant digits
    var precision8 = number.toPrecision(8);  // Returns 8 significant digits
    
    // Display the original number and its different precision formats
    document.getElementById("precision_result").innerHTML = 
        "Original number: " + number + "<br>" +
        "3 digits precision: " + precision3 + "<br>" +
        "5 digits precision: " + precision5 + "<br>" +
        "8 digits precision: " + precision8;
}

// Call all functions when the page loads
window.onload = function() {
    concatenateStrings();
    sliceString();
    numberToString();
    precisionNumber();
};

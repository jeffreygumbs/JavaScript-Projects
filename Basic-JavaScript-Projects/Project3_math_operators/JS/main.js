function subtraction_Function() {
    var subtraction = 10 - 5;
    document.getElementById("Math").innerHTML = "10 - 5 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 6 * 8;
    document.getElementById("multiplication").innerHTML = "6 * 8 = " + multiplication;
}

function division_Function() {
    var division = 48 / 6;
    document.getElementById("division").innerHTML = "48 / 6 = " + division;
}

function modulus_operator() {
    var simple = 25 % 6;
    document.getElementById("modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple;
    
    var even_check = 24 % 2;
    document.getElementById("even_odd").innerHTML = "24 divided by 2 has a remainder of: " + even_check + " (0 means it's even!)";
}

function negation_operator() {
    var x = 10;
    var negX = -x;
    document.getElementById("negation1").innerHTML = "The negative of " + x + " is: " + negX;

    var y = -25;
    var negY = -y;
    document.getElementById("negation2").innerHTML = "The negative of " + y + " is: " + negY;

    var z = 0;
    var negZ = -z;
    document.getElementById("negation3").innerHTML = "The negative of " + z + " is: " + negZ;
}

function increment_decrement() {
    // Pre-increment example
    var num1 = 5;
    document.getElementById("pre_increment").innerHTML = "Starting value: " + num1;
    document.getElementById("pre_increment_after").innerHTML = "After ++num1: " + (++num1);
    
    // Post-increment example
    var num2 = 10;
    document.getElementById("post_increment").innerHTML = "Starting value: " + num2;
    document.getElementById("post_increment_result").innerHTML = "During num2++: " + (num2++);
    document.getElementById("post_increment_after").innerHTML = "After num2++: " + num2;
    
    // Pre-decrement example
    var num3 = 15;
    document.getElementById("pre_decrement").innerHTML = "Starting value: " + num3;
    document.getElementById("pre_decrement_after").innerHTML = "After --num3: " + (--num3);
    
    // Post-decrement example
    var num4 = 20;
    document.getElementById("post_decrement").innerHTML = "Starting value: " + num4;
    document.getElementById("post_decrement_result").innerHTML = "During num4--: " + (num4--);
    document.getElementById("post_decrement_after").innerHTML = "After num4--: " + num4;
}

function random_numbers() {
    // Basic random number between 0 and 1
    var basic = Math.random();
    document.getElementById("random_basic").innerHTML = "Random number between 0 and 1: " + basic;
    
    // Random number between 1 and 10
    var oneToTen = Math.floor(Math.random() * 10) + 1;
    document.getElementById("random_1_10").innerHTML = "Random number between 1 and 10: " + oneToTen;
    
    // Random number between 1 and 100
    var oneToHundred = Math.floor(Math.random() * 100) + 1;
    document.getElementById("random_1_100").innerHTML = "Random number between 1 and 100: " + oneToHundred;
    
    // Random number between -10 and 10
    var negativeToPositive = Math.floor(Math.random() * 21) - 10;
    document.getElementById("random_neg_pos").innerHTML = "Random number between -10 and 10: " + negativeToPositive;
    
    // Random decimal number between 0 and 10 (2 decimal places)
    var decimal = (Math.random() * 10).toFixed(2);
    document.getElementById("random_decimal").innerHTML = "Random decimal between 0 and 10: " + decimal;
}

function more_Math() {
    // Power operation
    var power = Math.pow(2, 8);
    document.getElementById("power").innerHTML = "2 to the power of 8 is: " + power;
}

function math_methods() {
    // Math.round() - rounds to nearest integer
    var roundExample = Math.round(4.7);
    document.getElementById("round").innerHTML = "Math.round(4.7) = " + roundExample;

    // Math.ceil() - rounds up to nearest integer
    var ceilExample = Math.ceil(4.3);
    document.getElementById("ceil").innerHTML = "Math.ceil(4.3) = " + ceilExample;

    // Math.floor() - rounds down to nearest integer
    var floorExample = Math.floor(4.7);
    document.getElementById("floor").innerHTML = "Math.floor(4.7) = " + floorExample;

    // Math.abs() - returns absolute value
    var absExample = Math.abs(-4.7);
    document.getElementById("abs").innerHTML = "Math.abs(-4.7) = " + absExample;

    // Math.pow() - returns base to the exponent power
    var powExample = Math.pow(2, 3);
    document.getElementById("pow").innerHTML = "Math.pow(2, 3) = " + powExample;

    // Math.sqrt() - returns square root
    var sqrtExample = Math.sqrt(64);
    document.getElementById("sqrt").innerHTML = "Math.sqrt(64) = " + sqrtExample;

    // Math.min() - returns lowest value
    var minExample = Math.min(0, 150, 30, 20, -8, -200);
    document.getElementById("min").innerHTML = "Math.min(0, 150, 30, 20, -8, -200) = " + minExample;

    // Math.max() - returns highest value
    var maxExample = Math.max(0, 150, 30, 20, -8, -200);
    document.getElementById("max").innerHTML = "Math.max(0, 150, 30, 20, -8, -200) = " + maxExample;

    // Math.PI - returns PI value
    var piExample = Math.PI;
    document.getElementById("pi").innerHTML = "Math.PI = " + piExample;

    // Math.sin() - returns sine of angle in radians
    var sinExample = Math.sin(90 * Math.PI / 180); // Convert 90 degrees to radians
    document.getElementById("sin").innerHTML = "Math.sin(90 degrees) = " + sinExample.toFixed(2);

    // Math.cos() - returns cosine of angle in radians
    var cosExample = Math.cos(0 * Math.PI / 180); // Convert 0 degrees to radians
    document.getElementById("cos").innerHTML = "Math.cos(0 degrees) = " + cosExample.toFixed(2);
}

// Call these functions when the page loads
window.onload = function() {
    subtraction_Function();
    multiplication_Function();
    division_Function();
    modulus_operator();
    negation_operator();
    increment_decrement();
    random_numbers();
    more_Math();
    math_methods();
}
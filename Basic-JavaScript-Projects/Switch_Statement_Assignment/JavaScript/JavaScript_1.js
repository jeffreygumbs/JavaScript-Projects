function getAnimalFact() {
    // Get the selected animal from the dropdown
    let animal = document.getElementById("animalSelect").value;
    let fact;

    // Switch statement to determine which fact to display
    switch(animal) {
        case "lion":
            fact = "Lions are the only cats that live in groups, called prides!";
            drawAnimal("🦁");
            break;
        case "elephant":
            fact = "Elephants are the only mammals that can't jump!";
            drawAnimal("🐘");
            break;
        case "giraffe":
            fact = "A giraffe's spots are like human fingerprints - no two patterns are exactly the same!";
            drawAnimal("🦒");
            break;
        case "penguin":
            fact = "Emperor penguins can dive up to 1800 feet deep in the ocean!";
            drawAnimal("🐧");
            break;
        case "dolphin":
            fact = "Dolphins sleep with one half of their brain at a time!";
            drawAnimal("🐬");
            break;
        default:
            fact = "Please select an animal to see a fun fact!";
            clearCanvas();
    }

    // Display the fact in the paragraph element
    document.getElementById("factOutput").innerHTML = fact;
    
    // Remove highlight from all text elements when new fact is selected
    removeHighlight();
}

// Function to highlight all text elements
function highlightFacts() {
    // Get all elements with class 'title', 'instruction', and 'fact-text'
    let titleElement = document.getElementsByClassName("title");
    let instructionElement = document.getElementsByClassName("instruction");
    let factElement = document.getElementsByClassName("fact-text");
    
    // Add highlight class to each element
    titleElement[0].classList.add("highlight");
    instructionElement[0].classList.add("highlight");
    factElement[0].classList.add("highlight");
}

// Function to remove highlights
function removeHighlight() {
    // Get all elements that might have highlights
    let elements = document.getElementsByClassName("highlight");
    
    // Convert the HTMLCollection to an array and remove highlight class
    Array.from(elements).forEach(element => {
        element.classList.remove("highlight");
    });
}

// Function to draw animal emoji on canvas
function drawAnimal(emoji) {
    const canvas = document.getElementById("animalCanvas");
    const ctx = canvas.getContext("2d");
    
    // Clear the canvas
    clearCanvas();
    
    // Set the font and text alignment
    ctx.font = "100px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Draw the emoji in the center of the canvas
    ctx.fillText(emoji, canvas.width/2, canvas.height/2);
}

// Function to clear the canvas
function clearCanvas() {
    const canvas = document.getElementById("animalCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

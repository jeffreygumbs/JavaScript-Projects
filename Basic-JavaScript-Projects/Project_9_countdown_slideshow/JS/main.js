// Countdown Timer Function
function countdown() {
    // Get the number of seconds from input field
    var seconds = document.getElementById("seconds").value;

    // Inner function that runs every second
    function tick() {
        // Decrease seconds by 1
        seconds = seconds - 1;
        // Display current seconds in timer element
        timer.innerHTML = seconds;

        // Schedule next tick after 1 second (1000 milliseconds)
        var time = setTimeout(tick, 1000);

        // Check if countdown is finished
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time); // Stop the countdown
            timer.innerHTML = ""; // Clear the display
        }
    }

    tick(); // Start the countdown
}

// Slideshow Variables
let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Slideshow function
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    
    // Loop back to first slide if we've reached the end
    if (n > slides.length) {
        slideIndex = 1;
    }
    // Go to last slide if we've gone before first slide
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show the current slide
    slides[slideIndex-1].style.display = "block";
}

// Initialize slideshow when page loads
window.onload = function() {
    showSlides(slideIndex);
};

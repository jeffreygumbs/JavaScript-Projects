// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        const element = document.getElementById("p1");
        if (element) {
            alert(element.innerHTML);
        } else {
            console.error("Element with id 'p1' not found");
        }
    } catch (error) {
        console.error("Error accessing element:", error);
    }
});

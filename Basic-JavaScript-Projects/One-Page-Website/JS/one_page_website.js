// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    
    // Get the modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];
    const images = document.getElementsByClassName("item");
    const photos = document.getElementsByClassName("photo");

    console.log('Found images:', images.length);

    // Function to open modal
    function openModal(imgSrc, imgAlt) {
        console.log('Opening modal with image:', imgSrc);
        modal.style.display = "block";
        modalImg.src = imgSrc;
        captionText.innerHTML = imgAlt;
        setTimeout(() => {
            modal.classList.add("show");
        }, 10);
    }

    // Add click event to all images
    Array.from(photos).forEach((photo, index) => {
        console.log(`Adding click event to photo ${index + 1}`);
        const img = photo.querySelector('.item');
        
        photo.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Photo clicked');
            if (img) {
                openModal(img.src, img.alt);
            }
        });
    });

    // Function to close modal
    function closeModal() {
        console.log('Closing modal');
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    // Close the modal when clicking the × button
    closeBtn.addEventListener('click', closeModal);

    // Close the modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    // Prevent modal image click from closing modal
    modalImg.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
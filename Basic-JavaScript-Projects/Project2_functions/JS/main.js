function changeText() {
  // Get a reference to the paragraph element
  let paragraph = document.getElementById("myParagraph");

 let message = "Hello World, "
message += "this text has been changed!";

  // Assign new text and color to the paragraph
  paragraph.textContent = message;
  paragraph.style.color = "blue";
}


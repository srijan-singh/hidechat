console.log("Waiting for page to load...");

// Function to hide the span element
function hideSpanElement(spanElement) {
  // Hide the span element by setting its opacity property to 0
  spanElement.style.filter = 'blur(5px)';

  // Add a mouseover event listener to the parent element
  spanElement.parentElement.addEventListener("mouseover", function() {
    // Show the span element by setting its opacity property to 1
    spanElement.style.filter = 'none';
  });

  // Add a mouseout event listener to the parent element
  spanElement.parentElement.addEventListener("mouseout", function() {
    // Hide the span element by setting its opacity property to 0
    spanElement.style.opacity = 0;
  });
}

// Wait for the webpage to fully load
window.addEventListener("load", function() {
  console.log("Page loaded.");

  // Wait for an additional 10 seconds before hiding the span element
  setTimeout(function() {
    // Select all the span elements you want to hide using their class
    const spanElements = document.querySelectorAll('span.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr');

    // Check if the span elements were found
    if (spanElements.length > 0) {
      console.log(spanElements.length + " span elements found.");
      // Loop through each span element and hide it
      spanElements.forEach(function(spanElement) {
        hideSpanElement(spanElement);
      });
    } else {
      // Display an alert message if the span element was not found
      console.log('Could not find the span element!');
    }
  }, 10000);
});

console.log("Waiting for page to load...");

// Wait for the webpage to fully load
window.addEventListener("load", function() {
  console.log("Page loaded.");

  // Wait for an additional 5 seconds before hiding the span element
  setTimeout(function() {
    // Select the span element you want to hide using its class
    const spanElements = document.querySelectorAll('span.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr');

    // Check if the span element was found
     // Check if any span elements were found
     if (spanElements.length > 0) {
      console.log(spanElements.length + " span elements found.");
      // Loop over the span elements and hide each one by setting its display property to 'none'
      spanElements.forEach(function(spanElement) {
        spanElement.style.display = 'none';
      });
    } else {
      // Display an alert message if the span element was not found
      console.log('Could not find the span element!');
    }
  }, 5000);
});

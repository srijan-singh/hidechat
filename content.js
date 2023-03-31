console.log("Waiting for page to load...");

// Wait for the webpage to fully load
window.addEventListener("load", function() {
  console.log("Page loaded.");

  // Wait for an additional 5 seconds before hiding the span element
  setTimeout(function() {
    // Select all the span elements you want to modify using their class
    const spanElements = document.querySelectorAll('span.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr');

    // Check if the span elements were found
    if (spanElements.length > 0) {
      console.log("Span elements found.");

      // Loop through all the span elements and add the blur effect and hover behavior
      spanElements.forEach(spanElement => {
        // Set the CSS styles to blur the span element
        spanElement.style.filter = 'blur(5px)';

        // Show the span element on hover
        spanElement.addEventListener('mouseover', () => {
          spanElement.style.filter = 'none';
        });

        // Hide the span element on mouseout
        spanElement.addEventListener('mouseout', () => {
          spanElement.style.filter = 'blur(5px)';
        });
      });
    } else {
      // Display an alert message if the span elements were not found
      console.log('Could not find the span elements!');
    }
  }, 10000);
});

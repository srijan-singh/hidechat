console.log("Waiting for page to load...");

// Function to hide the span element
function hideSpanElement(spanElement) {
  // Hide the span element by blurring it
  spanElement.style.filter = 'blur(5px)';

  // Add a mouseover event listener to the parent element
  spanElement.parentElement.addEventListener("mouseover", function() {
    // Show the span element by removing blur
    spanElement.style.filter = 'none';
  });

  // Add a mouseout event listener to the parent element
  spanElement.parentElement.addEventListener("mouseout", function() {
    // Hide the span element by blurring it again
    spanElement.style.filter = 'blur(5px)';
  });
}

// Wait for the webpage to fully load
window.addEventListener("load", function() {
  console.log("Page loaded.");

  // Set up a mutation observer to detect when span elements are added to the DOM
  const observer = new MutationObserver(function(mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // Select all the added span elements using their class
        const addedSpanElements = document.querySelectorAll('span.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr');

        // Loop through each added span element and hide it
        addedSpanElements.forEach(function(addedSpanElement) {
          hideSpanElement(addedSpanElement);
        });
      }
    }
  });

  // Start observing the body element for changes to its child nodes
  observer.observe(document.body, { childList: true, subtree: true });

});
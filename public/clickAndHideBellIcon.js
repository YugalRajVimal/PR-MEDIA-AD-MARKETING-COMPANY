document.addEventListener("DOMContentLoaded", () => {
  const targetNode = document.body;
  const config = { childList: true, subtree: true };

  const clickAndHideBell = () => {
    const bellButton = document.querySelector(".onesignal-bell-container");
    if (bellButton) {
      // Programmatically click the button
      bellButton.click();
      // Hide the button by setting its display style
      bellButton.style.display = "none";
      console.log("OneSignal bell launcher button clicked and hidden.");
      return true; // Indicate that the button was found and processed
    }
    return false; // Indicate that the button was not found
  };

  // Create a MutationObserver to watch for the button being added to the DOM
  const observer = new MutationObserver((mutationsList, observerInstance) => {
    if (clickAndHideBell()) {
      observerInstance.disconnect(); // Stop observing once the button is found and processed
    }
  });

  // Start observing the document body for changes
  observer.observe(targetNode, config);

  // Also try to click and hide immediately in case the button is already present
  // before the observer's callback is first invoked.
  if (clickAndHideBell()) {
    observer.disconnect(); // No need to observe if found immediately
  }
});

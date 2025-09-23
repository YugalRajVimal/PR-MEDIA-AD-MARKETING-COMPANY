document.addEventListener("DOMContentLoaded", () => {
  const targetNode = document.body;
  const config = { childList: true, subtree: true };

  const clickAndHideBell = () => {
    // const bellButton = document.querySelector(
    //   ".onesignal-bell-launcher-button"
    // );
    const bellContainer = document.querySelector(".onesignal-slidedown-container");

    // onesignal-bell-launcher-button
    if (bellContainer) {
      // Delay the click and hide by 2.5 seconds

      // bellButton.click();
      // bellButton.style.display = "none";
      bellContainer.style.display = "none";
      // console.log(
      //   "OneSignal bell launcher button clicked and hidden after delay."
      // );

      return true;
    }
    return false;
  };

  // Create a MutationObserver to watch for the button being added to the DOM
  const observer = new MutationObserver((mutationsList, observerInstance) => {
    if (clickAndHideBell()) {
      observerInstance.disconnect(); // Stop observing once the button is found
    }
  });

  // Start observing the document body for changes
  // observer.observe(targetNode, config);

  // Also try to click and hide immediately in case the button is already present
  if (clickAndHideBell()) {
    observer.disconnect();
  }
});

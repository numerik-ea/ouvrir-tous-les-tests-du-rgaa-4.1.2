function main() {
  // Locate the <h1> element
  const h1Element = document.querySelector("h1.fr-mb-5w");

  // Check if the <h1> element was found
  if (!h1Element) {
    console.error("Could not find <h1> element");
    return;
  }

  // Style the <h1> element so it's inline with the injected button
  h1Element.style.display = "inline-flex";

  // Create the "toggle all accordions button" element
  const button = document.createElement("button");
  button.type = "button";
  button.ariaExpanded = "false";
  button.innerHTML =
    'Ouvrir tous les tests <span class="fr-icon-arrow-down-s-line" aria-hidden="true"></span>';
  button.className = "fr-btn fr-btn--secondary";
  button.style.marginLeft = "20px";

  let areAccordionsExpanded = false;

  // Function to toggle aria-expanded
  function toggleAccordions() {
    if (!window.toggleAccordionsButtons) {
      window.toggleAccordionsButtons = Array.from(
        document.getElementsByClassName("fr-accordion__btn")
      );
    }

    // Update aria-expanded for each button
    window.toggleAccordionsButtons.forEach((element) => {
      element.setAttribute(
        "aria-expanded",
        areAccordionsExpanded ? "false" : "true"
      );
    });
  }

  // Add click event listener to toggle aria-expanded
  button.addEventListener("click", () => {
    if (areAccordionsExpanded) {
        location.reload();
        return;
    }

    toggleAccordions();

    // Update aria-expanded
    button.ariaExpanded = areAccordionsExpanded ? "false" : "true";

    // Toggle state for the next click
    areAccordionsExpanded = !areAccordionsExpanded;

    // Update button text based on current state
    button.innerHTML = areAccordionsExpanded
      ? 'Fermer tous les tests <span class="fr-icon-arrow-up-s-line" aria-hidden="true"></span>'
      : 'Ouvrir tous les tests <span class="fr-icon-arrow-down-s-line" aria-hidden="true"></span>';
  });

  // Insert the button at the end of the <h1> element
  h1Element.appendChild(button);
}

main();

function main() {
  // Locate the <h1> element
  const h1Element = document.querySelector("h1.fr-mb-5w");

  // Check if the <h1> element was found
  if (!h1Element) {
    console.error("Could not find <h1> element");
    return;
  }

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

  // Create the "toggle all accordions button" element
  const button = document.createElement("button");
  button.type = "button";
  button.ariaExpanded = "false";
  button.className = "fr-btn fr-btn--secondary";

  const toggleTextSpan = document.createElement("span");
  toggleTextSpan.id = "toggle-text";
  toggleTextSpan.innerText = "Ouvrir tous les tests";

  const toggleIconSpan = document.createElement("span");
  toggleIconSpan.id = "toggle-icon";
  toggleIconSpan.className = "fr-icon-arrow-down-s-line";
  toggleIconSpan.setAttribute("aria-hidden", "true");
  toggleIconSpan.style.marginTop = "3px";
  toggleIconSpan.style.transition = "transform 0.3s";

  button.appendChild(toggleTextSpan);
  button.appendChild(toggleIconSpan);

  // Add click event listener to toggle aria-expanded
  button.addEventListener("click", () => {
    if (areAccordionsExpanded) {
        // If all accordions are expanded, reload the page
        // Reloading the page is faster than toggling aria-expanded on each button
        // Plus we stay at the top of the page after reload
        location.reload();
        return;
    }

    toggleAccordions();

    // Update aria-expanded
    button.ariaExpanded = "true";

    // Update button text based on current state
    toggleTextSpan.innerText = 'Fermer tous les tests';

    // Update button icon based on current state
    toggleIconSpan.style.marginTop = "2px";
    toggleIconSpan.style.transform = "rotate(-180deg)";

    // Toggle state for the next click
    areAccordionsExpanded = !areAccordionsExpanded;    
  });

  const div = document.createElement("div");
  div.className = "fr-mb-5w";

  const newH1 = document.createElement("h1");
  newH1.textContent = "Critères et tests";

  const mobileMediaQuery = window.matchMedia("(max-width: 508px)");

  function setElementsStyles() {
    if (mobileMediaQuery.matches) {
      button.style.marginLeft = "0";
      div.style.display = "block";
      newH1.style.marginBottom = "15px";
    } else {
      button.style.marginLeft = "15px";
      div.style.display = "inline-flex";
      newH1.style.marginBottom = "0";
    }
  }

  setElementsStyles();

  mobileMediaQuery.addEventListener("change", () => {
    setElementsStyles();
  });

  const h1ParentNode = h1Element.parentNode;
  h1ParentNode.removeChild(h1Element);

  div.appendChild(newH1);
  div.appendChild(button);

  h1ParentNode.appendChild(div);  
}

main();

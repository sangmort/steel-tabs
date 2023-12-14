(async function () {
  // Preloader animation
  document.addEventListener("DOMContentLoaded", function () {
    let loaderWrapper = document.querySelector(".loader-wrapper");
    loaderWrapper.classList.add("fade-out");
  });

  // Randomizer helper function
  function selectRandomItemFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Fetch quotes from JSON file with error handling
  async function fetchQuotes() {
    try {
      const response = await fetch(chrome.runtime.getURL("./scripts/quotes.json"));
      if (!response.ok) {
        throw new Error("Failed to fetch quotes.");
      }
      const quotes = await response.json();
      return quotes;
    } catch (error) {
      console.error("Error fetching quotes:", error.message);
      return [];
    }
  }

  // Tomlinism generator 
  async function tomlinismGenerator() {
    const tomlinism = await fetchQuotes();
    let randomTomlinQuote = selectRandomItemFrom(tomlinism);
    let quoteElement = document.getElementById("tomlinism-quote");
    quoteElement.innerHTML = '"' + randomTomlinQuote + '"';

    // Check if the quote is long & add CSS class to shrink text size
    if (randomTomlinQuote.length > 100) {
      quoteElement.classList.add("shrink-text");
    } else {
      quoteElement.classList.remove("shrink-text");
    }
  }

  // Call Tomlinism generator on DOM content load
  document.addEventListener("DOMContentLoaded", tomlinismGenerator);

  // Theme functionality
  function setTheme(theme) {
    document.body.className = "theme-" + theme;
    localStorage.setItem("selectedTheme", theme);
  }

  // Handle theme changes in radio buttons
  function handleThemeChange(radio) {
    const selectedTheme = radio.value;
    setTheme(selectedTheme);

    document.querySelectorAll(".options label").forEach(function (label) {
      label.classList.remove("checked");
    });

    const labelForRadio = document.querySelector(`label[for="${radio.id}"]`);
    if (labelForRadio) {
      labelForRadio.classList.add("checked");
    }
  }

  // Listen for theme changes in radio buttons & update the page
  document.querySelectorAll('input[name="theme"]').forEach(function (radio) {
    radio.addEventListener("change", function () {
      handleThemeChange(this);
    });
  });

  // Set default theme on page load based on stored preference otherwise default to home-theme
  const storedTheme = localStorage.getItem("selectedTheme");
  const defaultTheme = storedTheme || "home";

  // Set the default theme and mark corresponding label as checked
  setTheme(defaultTheme);

  const checkedLabel = document.querySelector(`label[for="theme-${defaultTheme}"]`);
  if (checkedLabel) {
    checkedLabel.classList.add("checked");
  }
})();

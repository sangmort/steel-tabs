document.addEventListener("DOMContentLoaded", function () {
  // Simulate a delay (you can replace this with your actual loading logic)
  setTimeout(function () {
    // Hide the loader
    document.querySelector(".loader-wrapper").style.display = "none";

    // Display content & adjust delay
    document.querySelector(".content").style.display = "block";
  }, 100); 
});

// Randomizer
function selectRandomItemFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Fetch quotes from JSON file
async function fetchQuotes() {
  const response = await fetch(chrome.runtime.getURL("./scripts/quotes.json"));
  const quotes = await response.json();
  return quotes;
}

// Selects tomlinism, apply randomizer, inject into the page
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

tomlinismGenerator();

document.addEventListener("DOMContentLoaded", function () {
  // Set selected theme for the page
  function setTheme(theme) {
    document.body.className = "theme-" + theme;
    localStorage.setItem("selectedTheme", theme);
  }

  // Listen for theme changes in radio buttons & update the page
  document.querySelectorAll('input[name="theme"]').forEach(function (radio) {
    radio.addEventListener("change", function () {
      const selectedTheme = this.value;
      setTheme(selectedTheme);

      document.querySelectorAll(".options label").forEach(function (label) {
        label.classList.remove("checked");
      });

      const labelForRadio = document.querySelector(`label[for="${this.id}"]`);
      if (labelForRadio) {
        labelForRadio.classList.add("checked");
      }
    });
  });

  // Set default theme on page load based on stored preference or default to home-theme
  const storedTheme = localStorage.getItem("selectedTheme");
  const defaultTheme = storedTheme || "home";

  // Set the default theme and mark corresponding label as checked
  setTheme(defaultTheme);

  const checkedLabel = document.querySelector(`label[for="theme-${defaultTheme}"]`);
  if (checkedLabel) {
    checkedLabel.classList.add("checked");
  }
});

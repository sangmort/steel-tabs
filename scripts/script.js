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

// Sets selected theme for the page
function setTheme(theme) {
  document.body.className = 'theme-' + theme;
  localStorage.setItem('selectedTheme', theme);
}

// Listens for theme changes in dropdown & updates the page
document.querySelector('#theme-select').addEventListener('change', function(e) {
  const selectedTheme = e.target.value;
  setTheme(selectedTheme);
});

// Sets default theme on page load based on stored preference or defaults to home-theme
document.addEventListener('DOMContentLoaded', function() {
  const storedTheme = localStorage.getItem('selectedTheme');
  setTheme(storedTheme || 'home');
});

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

let tomlinism = [
  "Black and Gold doesn’t fold.",
  "The standard is the standard.",
  "We're still <strong> squirreling </strong> those nuts.",
  "There’s a fine line between drinking wine and squashing grapes.",
  "We need volunteers, not hostages.",
  "Can’t do ordinary things and expect unique results.",
  "It’s not what you’re capable of, but it’s about what you’re willing to do. We put our expectations based on our capabilities. <br>And, really, we should put our expectations based on performance, based on the work we put in. <br>It applies to football, but it applies to every component of life. ",
];

// Randomizer
function selectRandomItemFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Selects toliminism, applies randomizer, injects into the page
function tomlinismGenerator() {
    let randomTomlinQuote = selectRandomItemFrom(tomlinism);
    let quoteElement = document.getElementById("tomlinism-quote");
    quoteElement.innerHTML = '"' + randomTomlinQuote + '"';

    // Check if the quote is long and add a CSS class to shrink text size
    if (randomTomlinQuote.length > 100) {
      quoteElement.classList.add("shrink-text");
    } else {
      quoteElement.classList.remove("shrink-text");
    }
  }

tomlinismGenerator();

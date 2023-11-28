let tomlinism = [
  "Black and Gold doesn’t fold.",
  "The standard is the standard.",
  "We're still squirreling those nuts.",
  "There’s a fine line between drinking wine and squashing grapes.",
  "We need volunteers, not hostages.",
  "Can’t do ordinary things and expect unique results.",
];

// Randomizer
function selectRandomItemFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Selects toliminism, applies randomizer, injects into the page
function tomlinismGenerator() {
  let randomTomlinQuote = selectRandomItemFrom(tomlinism);
  document.getElementById("tomlinism-quote").innerHTML = '"' + randomTomlinQuote + '"';
}

tomlinismGenerator();
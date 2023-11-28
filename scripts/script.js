let tomlinism = [
  "Black and Gold doesn’t fold.",
  "The standard is the standard.",
  "Don't seek that comfort.",
  "Don't get caught in the minutiae.",
  "Don't blink or I'll cut your eyelids off.",
  "The secret is there's no secret.",
  "Pressure is forever relevant. You're either feeling it, or applying it.",
  "It's always about the next one.",
  "We're not hungry. We're driven. Hunger can be satiated.",
  "We're still <strong>squirreling</strong> those <strong>nuts</strong>.",
  "There’s a fine line between drinking wine and squashing grapes.",
  "We need <strong>volunteers</strong>, not <strong>hostages</strong>.",
  "Can’t do ordinary things and expect unique results.",
  "Smile in the face of adversity.",
  "Make it a great day.",
  "We don't live in our fears. We live in our hopes.",
  "Excuses are tools of the incompetent",
  "We’re not urinating on the fire, man.",
  "The strength of the pack is the pack.",
  "People aren't very good listeners, by nature. Part of being a good communicator is recognizing and understanding that and trying to make the complex simple. I try to capture a concept, an idea or a moment in a few words. If they remember it, job done."
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

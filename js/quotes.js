const quotes = [
  {
    quote: "Nothing fails like success.",
    author: "Gerald Nachman",
  },
  {
    quote: "Education is a state-controlled manufactory of echoes.",
    author: "Norman Douglas",
  },
  {
    quote: "Death is better, a milder fate than tyranny.",
    author: "Aeschylus",
  },
  {
    quote: "Tis the most tender part of love, each other to forgive.",
    author: "John Sheffield",
  },
  {
    quote: "Love is an irresistible desire to be irresistibly desired.",
    author: "Robert Frost",
  },
  {
    quote: "It's not how much we give, but how much love we put into giving.",
    author: "Mother Teresa",
  },
  {
    quote: "There is no remedy for love but to love more.",
    author: "Henry David Thoreau",
  },
  {
    quote: "Lord, grant that I may always desire more than I accomplish.",
    author: "Michelangelo",
  },
  {
    quote: "He that lives upon hope will die fasting.",
    author: "Benjamin Franklin",
  },
  {
    quote: "In the end, everything is a gag.",
    author: "Charlie Chaplin",
  },
  {
    author: "He who has never hoped can never despair.",
    author: "George Bernard Shaw",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

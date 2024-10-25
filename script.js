const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}
let apiQuotes = [];
//const quotes;
function newQuotes() {
  loading();
  const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!quotes.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quotes.author;
  }
  if (quotes.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quotes.text;
  complete();
  //console.log(quotes);
}
async function getQuotes() {
  loading();
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuotes();
  } catch {
    console.log("Error fetching quotes");
  }
}
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

newBtn.addEventListener("click", newQuotes);
twitterBtn.addEventListener("click", tweetQuote);
getQuotes();

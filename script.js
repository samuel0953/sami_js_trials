let apiQuotes = [];
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = response.json();
    console.log(apiQuotes);
  } catch {
    console.log("Error fetching quotes");
  }
}
getQuotes();

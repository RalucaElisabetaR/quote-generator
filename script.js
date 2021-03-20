let apiQuotes = [];

// new quote function

function newQuote() {
  // pick random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}


// get Quotes from API
async function getQuotes() {
  const apiUrl = 'https:type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote()
  } catch (error) {
    // catch error
  }
}
// on load
getQuotes();
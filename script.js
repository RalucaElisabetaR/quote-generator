const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}
// Show New Quote
function newQuote() {
  showLoadingSpinner();
  // Pick a random quote from array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if Author field is blank and replace it with 'Unknown'
  if (!quote.author)
  {
    authorText.textContent = 'Unknown';
  } else
  {
    authorText.textContent = quote.author;
  }
  // reduce fontsize for long quotes
  if (quote.text.length > 100)
  {
    quoteText.classList.add('long-quote');
  } else
  {
    quoteText.classList.remove('long-quote');
  }
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

// Get Quotes From API
async function getQuotes() {
  showLoadingSpinner();
  const apiUrl = 'https://type.fit/api/quotes';
  try
  {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error)
  {
    // Catch Error Here
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();

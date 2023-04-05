const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
// Get Quotes From API
let apiQuotes = [];

function showLoadingSpin() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// hide loading
function removeLoadingSpin() {
    if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
}
}
// Show New Quote
function newQuote() {
    showLoadingSpin();
    // Pick a Random Quote From apiQuotes Array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check If Author Field is Blank and Replace It With 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote Length To Determine Styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    removeLoadingSpin();
}
async function getQuotes() {
    showLoadingSpin();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
        return data;
        throw new Error('Something went wrong');

    } catch (error) {
        // Catch Error Here
        console.log('whoops, no quote', error);
    }
}
// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
// On Load
getQuotes();

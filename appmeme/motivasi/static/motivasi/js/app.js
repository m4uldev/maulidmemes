document.addEventListener('DOMContentLoaded', function() {
    const quoteText = document.getElementById('quoteText');
    const newQuoteButton = document.getElementById('newQuoteButton');

    function fetchQuotes(callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '../static/motivasi/js/motivasi.json', true);
        xhr.responseType = 'json';

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                callback(null, xhr.response);
            } else {
                callback(new Error('The request failed with status: ' + xhr.status));
            }
        };

        xhr.onerror = function() {
            callback(new Error('There was a network error.'));
        };

        xhr.send();
    }

    function getRandomQuote(quotes) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex].text;
        console.log('ha')
    }

    function displayRandomQuote() {
        fetchQuotes(function(error, quotes) {
            if (error) {
                console.error(error);
                quoteText.textContent = 'Failed to load quotes.';
            } else {
                const randomQuote = getRandomQuote(quotes);
                quoteText.textContent = '"'+randomQuote+'"'; 
            }
        });
    }

    newQuoteButton.addEventListener('click', displayRandomQuote);

    // Display a random quote when the page loads
    displayRandomQuote();
});

function myFunction() {
    // Mendapatkan elemen text field
    var copyTextElement = document.getElementById('quoteText');
    
    // Mendapatkan teks dari elemen tersebut
    var copyText = copyTextElement.textContent || copyTextElement.innerText;
  
    // Menyalin teks ke clipboard
    navigator.clipboard.writeText(copyText).then(function() {
      // Menampilkan alert setelah teks disalin
      alert("Salin : " + copyText);
    }).catch(function(err) {
      console.error('Gagal menyalin teks:', err);
    });
  }
  

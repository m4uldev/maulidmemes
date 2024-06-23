const apiUrl = 'https://candaan-api.vercel.app/api/text/random';
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Koneksi gagal');
        }
        return response.json();
    })
    .then(data => {
        const quoteText = data['data'];
        console.log(data['data']);

        const quoteContainer = document.getElementById('jokes_random');
        quoteContainer.textContent = '"'+quoteText+' 😂'+'"';
        
    })
    .catch(error => {
        console.error('Koneksi error pada ', error);
    });

function myFunction() {
  // Mendapatkan elemen text field
  var copyTextElement = document.getElementById('jokes_random');
  
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

console.log('halo');
var yourName = document.getElementById("yourname"),
    theirName = document.getElementById("theirname"),
    calcBtn = document.getElementById("button"),
    yourlovescoreis = document.getElementById("yourlovescoreis"),
    loveScore = Math.random() * 100,
    loveInfo = document.getElementById("loveinfo"),
    reloadBtn = document.getElementById("reload");
loveScore = Math.floor(loveScore) + 1;

// fungsi untuk mengkapitalisasi kata
function capitalize_Words(str) {
    return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Fungsi Penghitung Skor Cinta
function love() {
    function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
    }
    (async function () {
    var i = 0;
    while (i < loveScore) {
        document.getElementById("score").innerHTML = i + "%";
        await sleep(20);
        i++;
    }
    })();
}

// Menambahkan event listener ke tombol
calcBtn.addEventListener("click", function (e) {
    loveScore = Math.random() * 100; // hapus baris ini jika ingin mempertahankan nilai yang sama dalam sesi yang sama
    e.preventDefault();
    if (yourName.value == "" && theirName.value == "") {
    alert("Anda tidak boleh meninggalkan kolom kosong");
    }
    if (yourName.value == "") {
    alert("Silakan Masukkan Nama Anda");
    }
    if (theirName.value == "") {
    alert("Silakan Masukkan Nama Pasangan Anda");
    }
    // kondisi untuk skor cinta
    else if (loveScore <= 10) {
    yourlovescoreis.innerHTML = "Skor Cinta Anda adalah";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
        "<b>Anda</b> dan " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " mencintai satu sama lain seperti Minyak & Air. Maaf, tetapi ini tidak cukup untuk hubungan yang sempurna.";
    } else if (loveScore <= 20) {
    yourlovescoreis.innerHTML = "Skor Cinta Anda adalah";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
        "<b>Anda</b> dan " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " mencintai satu sama lain seperti Burung & Langit. Tetapi perlu sedikit konsentrasi pada cinta Anda.";
    } else if (loveScore <= 30) {
    yourlovescoreis.innerHTML = "Skor Cinta Anda adalah";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
        "<b>Anda</b> dan " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " mencintai satu sama lain seperti Tanah & Benih. Anda harus lebih merawat cinta Anda!";
    } else if (loveScore <= 40) {
    yourlovescoreis.innerHTML = "Skor Cinta Anda adalah";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
        "<b>Anda</b> dan " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " mencintai satu sama lain seperti Romeo & Juliet. Tidak ada yang palsu dalam cinta Anda. Maju terus!";
    } else if (loveScore <= 50) {
    yourlovescoreis.innerHTML = "Skor Cinta Anda adalah";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
        "<b>Anda</b> dan " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " mencintai satu sama lain seperti Marie & Pierre Curie. Itu adalah kombinasi yang baik. Anda adalah contoh yang baik dari cinta sejati.";
    } else if (loveScore <= 60) {
    yourlovescoreis.innerHTML = "Skor Cinta Anda adalah";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
        "<b>Anda</b> dan " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " mencintai satu sama lain seperti Bumi & Bulan. Anda tidak dapat hidup tanpa satu sama lain.";
    } else if (loveScore <= 70) {
    yourlovescoreis.innerHTML = "Skor Cinta Anda adalah";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
        "<b>Anda</b> dan " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " mencintai satu sama lain seperti Sungai & Laut. Sebarkan Cinta, bukan Kebencian.";
    } else if (loveScore <= 80) {
    yourlovescoreis.innerHTML = "Skor Cinta Anda adalah";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
        "<b>Anda</b> dan " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " mencintai satu sama lain seperti lem. Tidak ada yang dapat memisahkan Anda satu sama lain. Cinta itu Abadi.";
    } else if (loveScore <= 90) {
    yourlovescoreis.innerHTML = "Skor Cinta Anda adalah";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
        "<b>Anda</b> dan " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " mencintai satu sama lain lebih dari apapun di dunia ini! Anda adalah contoh terbaik dari cinta sejati.";
    } else if (loveScore <= 100) {
    yourlovescoreis.innerHTML = "Skor Cinta Anda adalah";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
        "<b>Anda</b> dan " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " mencintai satu sama lain seperti Ertuğrul Gazi & Halime Sultan. Anda seharusnya menikahi " +
        "<b>" +
        capitalize_Words(theirName.value) +
        "</b>" +
        " sangat segera. Semoga Sukses!";
    }
});
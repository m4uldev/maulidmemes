from django.shortcuts import render

def index(request):
    context = {
        'title' : 'Maulid',
        'navbar' : [
            ['/','Home'],
            ['/kalkulatorcinta','Kalkulator Cinta'],
            ['/randommemes','Random Memes'],
            ['/cekkhodam','Cek Khodam'],
            ['/katabijak', 'Kata Bijak']
        ],
        'card' : [
            ['/kalkulatorcinta','Kalkulator Cinta 💕','Cek seberapa cocok kamu dengan si doi! Masukkan nama kamu dan nama pasanganmu untuk melihat persentase kecocokan cintamu! 💑'],
            ['/randommemes','Random Memes 😂','Cari-cari memes lucu dan random di sini! Aplikasi ini bikin hari kamu makin ceria dengan memes-memes gokil yang bisa bikin ngakak seharian! Jangan lupa di-share ke teman-teman biar mereka juga ikutan ngakak 😆📲! '],
            ['/cekkhodam','Cek Khodam 🎭','Mau tahu siapa khodam yang selalu ada di sampingmu? Yuk, cek sekarang! 😉'],
            ['/katabijak','Kata Bijak 🌟','Setiap hari lo bakal dapet kata bijak yang fresh banget buat nyemangatin hari-hari lo. 💫'],
        ]
    }
    return render(request, 'index.html',context)
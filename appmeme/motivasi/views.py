from django.shortcuts import render

def index(request):
    context = {
        'title' : 'Motivasi',
        'navbar' : [
            ['/','Home'],
            ['/kalkulatorcinta','Kalkulator Cinta'],
            ['/randommemes','Random Memes'],
            ['/cekkhodam','Cek Khodam'],
            ['/katabijak', 'Kata Bijak']
        ],
        'motivasi_css' : 'motivasi/css/style.css',
        'motivasi_js' : 'motivasi/js/app.js'
    }
    return render(request, 'motivasi/index.html', context)

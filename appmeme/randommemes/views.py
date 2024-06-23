from django.shortcuts import render

def index(request):
    context = {
        'title' : 'Random Memes',
        'navbar' : [
            ['/','Home'],
            ['/kalkulatorcinta','Kalkulator Cinta'],
            ['/randommemes','Random Memes'],
            ['/cekkhodam','Cek Khodam'],
            ['/katabijak', 'Kata Bijak']
        ],
        'randommemes_css' : 'randommemes/css/style.css',
        'jokes_js' : 'randommemes/js/app.js'
    }
    return render(request, 'randommemes/index.html', context)

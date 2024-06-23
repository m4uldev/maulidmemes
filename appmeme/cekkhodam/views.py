from django.shortcuts import render

def index(request):
    context = {
        'title' : 'Cek Khodam',
        'navbar' : [
            ['/','Home'],
            ['/kalkulatorcinta','Kalkulator Cinta'],
            ['/randommemes','Random Memes'],
            ['/cekkhodam','Cek Khodam'],
            ['/katabijak', 'Kata Bijak']
        ],
        'cekkhodam_css' : 'cekkhodam/css/style.css'
    }
    return render(request, 'cekkhodam/index.html', context)

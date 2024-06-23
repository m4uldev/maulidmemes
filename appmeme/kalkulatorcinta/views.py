from django.shortcuts import render

def index(request):
    context = {
        'title' : 'Kalkulator Cinta',
        'navbar' : [
            ['/','Home'],
            ['/kalkulatorcinta','Kalkulator Cinta'],
            ['/randommemes','Random Memes'],
            ['/cekkhodam','Cek Khodam'],
            ['/katabijak', 'Kata Bijak']
        ],
        'kalkulator_js' : 'kalkulatorcinta/js/app.js'
    }
    return render(request, 'kalkulatorcinta/index.html',context)

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.toLocaleTimeString()
    
    
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}`


    //outras condiçoes
    if(hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#dbc69f'
        

    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#945f1e'
    }else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#101120'
        }
}

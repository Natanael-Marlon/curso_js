function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 14

    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        img.src ='bolinhamanha.png'
        document.body.style.background = '#e8cba9'
        // BOM DIA
    }else if( hora >= 12 && hora < 18){
        img.src ='bolinhatarde.png'
        document.body.style.background = '#cd691e'
        // boa tarde
        
    }else{
        img.src ='bolinhanoite.png'
        document.body.style.background = '#032a30'
        // Boa noite
    }
}

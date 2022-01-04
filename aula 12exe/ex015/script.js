function verificar(){
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero ='Homem'
            if(idade >= 00 && idade < 13){
                img.setAttribute('src', 'menino.png')
                // criança
            }else if(idade < 21){
                img.setAttribute('src', 'xoven.png')
                // Jovem
            }else if(idade < 50){
                img.setAttribute('src', 'homi.png')
                // adulto
            }else{
                img.setAttribute('src', 'veio.png')
                // idoso
            }
        }else if(fsex[1].checked){
            genero='Mulher'
            if(idade >= 00 && idade < 13){
                img.setAttribute('src', 'menina.png')
                // criança
            }else if(idade < 21){
                img.setAttribute('src', 'mina.png')
                // Jovem
            }else if(idade < 50){
                img.setAttribute('src', 'muie.png')
                // adulto
            }else{
                img.setAttribute('src', 'veia.png')
                // idoso
            }            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)

    }

}
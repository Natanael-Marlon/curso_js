// primeiro contar de inicio ate o fim
// segundo contar de quantos em quantos passos ate o fim
// mostrar os numeros que foram contados
// colocar emojis
function contar(){
    var inicio = document.getElementById('txtini')
    // window.alert(inicio)
    var fim    = document.getElementById('txtfim')
    // window.alert(fim)
    var passo  = document.getElementById('txtpas')
    // window.alert(passo)
    var res = document.querySelector('div#res')

   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossivel contar!!!"
    }else{
        res.innerHTML = `Contando...`
        var nIni = Number(inicio.value)
        var nFim = Number(fim.value)
        var nPas = Number(passo.value)
        if(nPas <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            nPas = 1
        }
        if(nIni < nFim){
            for(var count = nIni; count <= nFim; count += nPas){
                res.innerHTML += ` ${count} \u{1F916}`
            }
        }else{
            for(var count = nIni; count >= nFim; count -= nPas){
                res.innerHTML += ` ${count} \u{1F916}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}



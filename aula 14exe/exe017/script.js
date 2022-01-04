// fazer um gerador de tabuada
// ter n1 que receba o valor do usuario
// e fazer om que esse n1 seje multipicado até 10 
//  conseguir colocar isso dentro do select

function tabuada(){
    var num = document.getElementById("txtn")
    var resposta = document.getElementById('resposta')
    if(num.value.length == 0){
        window.alert('[ERR0] por favor insira um numero!!!')
    }else{
        resposta.innerHTML = ''
        var n1 = Number(num.value)
        for(var count = 1;count <= 10 ; count++){
            var tab = document.createElement('option')
            tab.text = `${n1} x ${count} = ${n1 * count}`
        resposta.appendChild(tab)
        }
    }

}

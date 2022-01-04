var agora = new Date()
var hora = agora.getHours()

if (hora < 12){
    console.log(`Agora são exatamente ${hora} horas`)
    console.log(`Bom dia`)
}else if(hora <= 18){
    console.log(`Agora são exatamente ${hora} horas`)
    console.log(`Boa Tarde`)
}else if(hora <= 23){
    console.log(`Agora são exatamente ${hora} horas`)
    console.log(`Boa Noite`)
}else if(hora == 24){
    var hora = 00
    console.log(`Agora são exatamente ${hora} horas`)
    console.log(`Boa Madrugada`)
}else{
    console.log(`O dia tem apenas 24 horas`)
}
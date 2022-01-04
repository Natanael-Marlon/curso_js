var idade = 64
console.log(`Vc tem ${idade} anos`)
if(idade < 16){
    console.log(`Não vota`)
}else if(idade < 18 || idade > 64 ){
    console.log(`Voto opicional`)
}else{
    console.log('Voto brigatorio')
}
function saldo(vitorias,derrotas){
    saldoVitoria = vitorias - derrotas
    return saldoVitoria
}

saldo(80,80) // INSERT DE VALORES

if(saldoVitoria <= 10){
    console.log(`O Heroi tem o saldo de ${saldoVitoria}, está no Ferro`)
}else if(saldoVitoria >=11 && saldoVitoria <= 20){
    console.log(`O Heroi tem o saldo de ${saldoVitoria}, está no Bronze`)
}else if(saldoVitoria >= 21 && saldoVitoria <= 50){
    console.log(`O Heroi tem o saldo de ${saldoVitoria}, está no Prata`)
}else if(saldoVitoria >= 51 && saldoVitoria <= 80){
    console.log(`O Heroi tem o saldo de ${saldoVitoria}, está no Ouro`)
}else if(saldoVitoria >= 81 && saldoVitoria <= 90){
    console.log(`O Heroi tem o saldo de ${saldoVitoria}, está no Diamante`)
}else if(saldoVitoria >= 91 && saldoVitoria<= 100){
    console.log(`O Heroi tem o saldo de ${saldoVitoria}, está no Lendario`)
}else if(saldoVitoria > 100 ){
    console.log(`O Heroi tem o saldo de ${saldoVitoria}, está no Imortal`)
}


let nome = "Vinicius";
let experiencia = 10003;

if(experiencia < 1000){
    console.log(`O Herói de nome ${nome} está no nível Ferro`)
}else if(experiencia > 1000 && experiencia <= 2000){
    console.log(`O Herói de nome ${nome} está no nível Bronze`)
}else if(experiencia > 2000 && experiencia <= 5000){
    console.log(`O Herói de nome ${nome} está no nível Prata`)
}else if(experiencia > 5000 && experiencia <= 7000){
    console.log(`O Herói de nome ${nome} está no nível Ouro`)
}else if(experiencia > 7000 && experiencia <= 8000){
    console.log(`O Herói de nome ${nome} está no nível Platina`)
}else if(experiencia > 8000 && experiencia <= 9000){
    console.log(`O Herói de nome ${nome} está no nível Ascendente`)
}else if(experiencia > 9000 && experiencia <= 10000){
    console.log(`O Herói de nome ${nome} está no nível Imortal`)
}else if(experiencia > 10000){
    console.log(`O Herói de nome ${nome} está no nível Radiante`)
}
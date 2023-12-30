//TIPO: "guerreiro", "mago", "monge", "ninja"

class Hero{
    constructor(nomeHeroi,tipoHeroi){
        this.nome = nomeHeroi
        this.tipo = tipoHeroi
    }
    if
    atacar(){
        let arma;
        switch(this.tipo){
            case "guerreiro":
                arma = "usou espada"
                break
            case "mago":
                arma = "usou magia"
                break
            case "monge":
                arma = "usou artes marciais"
                break
            case "ninja":
                arma = "usou shuriken"
                break
            default:
                console.log("ERROR NO TIPO")
        }
        console.log(`${this.tipo} atacou usando ${arma}`)
    }
}

let Heroi = new Hero("Cleytin","guerreiro")//lugar onde se muda o tipo

Heroi.atacar()
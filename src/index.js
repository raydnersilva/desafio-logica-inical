const readline = require('readline');

const input = readline.createInterface({ input: process.stdin, output: process.stdout});

const classificacaoDeNivel = (nome, xp)=>{
    let nivel = "Ferro";
    if(xp >= 1001 && xp <= 2000){
        nivel = "Bronze"
    }else if(xp >= 2001 && xp <= 5000){
        nivel = "Prata"
    }else if(xp >= 5001 && xp <= 7000){
        nivel = "Ouro"
    }else if(xp >= 7001 && xp <= 8000){
        nivel = "Platina"
    }else if(xp >= 8001 && xp <= 9000){
        nivel = "Ascendente"
    }else if(xp >= 9001 && xp <= 10000){
        nivel = "Imortal"
    }else if(xp >= 10001){
        nivel = "Radiante"
    }

    return `O Herói de nome ${nome} está no nivel de ${nivel}`;
};


input.question('Digite seu nome: ', (nome) => {
    input.question('Digite seu xp: ', (xp) => {
        console.log(classificacaoDeNivel(nome, xp));
        input.close();
    });
})
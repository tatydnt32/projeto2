const prompt=require("prompt-sync")();
let jogar;//Inicio do jogo ,ou reiniciar o jogo
do {
    console.clear();
  
    let vitorias = 0 
    let derrotas = 0
    let empate = 0
    let opcoes = [0,1,2]//[0]pedra, [1]papel, [2]tesoura.
   
    console.log(" O Jokenpo, é um jogo simples que as crianças gostam de jogar nos intervalos.");
    console.log("temos 3 opções :Pedra , Papel e Tesoura,a regra do jogo é: PEDRA VENCE DE TESOURA; TESOURA VENCE DE PAPEL; PAPEL VENCE DE PEDRA.");//introdução do jogo 
    console.log();
const rodadas = +prompt("Quantas rodadas você quer jogar? ");
  console.log("1,2,3...Jokenpo!!")
for(let i=0;i<rodadas;i++){
    let escolha = +prompt("Escolha entre [0]pedra, [1]papel e [2]tesoura: ");
    while(escolha!=0 && escolha!=1 &&escolha!=2){
        escolha = +prompt("Escolha entre [0]pedra, [1]papel e [2]tesoura: ");
    }
    console.log();
    console.log(`Você escolheu ${escolha}`);

    let escolhaPC = opcoes[Math.floor(Math.random()*opcoes.length)];
    console.log(`PC escolheu ${escolhaPC}`)

    if(escolha==0 && escolhaPC==2 || escolha==1 && escolhaPC==0 || escolha==2 && escolhaPC==1){
        vitorias++
        console.log();
        console.log("VOCÊ GANHOU !!");

    }else if(escolhaPC==0 && escolha==2 || escolhaPC==1 && escolha==0 || escolhaPC==2 && escolha==1){
        derrotas++
        console.log();
        console.log("VOCÊ PERDEU!!");
    }else{
        empate++
        console.log();
        console.log("VOCÊ EMPATOU!!");
    }
}
    if(vitorias>derrotas){
        console.log();
        console.log(`VOCÊ GANHOU ${vitorias} VEZES, VOCÊ PERDEU ${derrotas} VEZES E EMPATOU ${empate} VEZES`);
        console.log("PARABÉNS VOCÊ FOI O CAMPEÃO!!");
    }else if(derrotas>vitorias){
        console.log();
    console.log(`VOCÊ GANHOU ${vitorias} VEZES, VOCÊ PERDEU ${derrotas} VEZES E EMPATOU ${empate} VEZES`);
    console.log("COMPUTADOR FOI O CAMPEÃO");
    }else if(vitorias==derrotas){
        console.log(`VOCÊ GANHOU ${vitorias} VEZES, VOCÊ PERDEU ${derrotas} VEZES E EMPATOU ${empate} VEZES`);
        console.log("EMPATAMOS");
    }
    jogar = prompt("Quer jogar novamente?(s/n): ").toLowerCase();
  while(jogar!="s" && jogar!="n"){
    console.log()  
    console.log('Responda apenas com "s" ou "n"')
    jogar = prompt("Vamos jogar novamente?(s/n): ").toLowerCase();
  }
    if(jogar=="s"){
      continue;
  }else if(jogar=="n"){
    console.log()  
    console.log("Foi bem divertido , Obrigado até a próxima!!!");
      break;
  }
} while (jogar=="s");
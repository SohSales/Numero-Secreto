let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 


//função para alterar texto exibido na tela e falar 
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
    responsiveVoice.speak(texto, "Brazilian Portuguise Female", {rate: 1.2});
}

//função mensagem inicial do site quando clicar em novo jogo
function mensagemInicial(){
exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

//chamando mensagem inicial para exibir o texto
mensagemInicial()


function verificarChute () {
    //adiciona a variavel chute o valor introduzido no espaço input
     let chute = document.querySelector("input").value;

     //caso o chute seja igual ao número secreto exibir na tela um texto especifico e abilitar o botão novo jogo
     if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você decobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById ("reiniciar").removeAttribute("disabled");
     }
     //caso contrario, avisar se o chute é maior ou menor que o numero secreto. Somar mais uma tentativa e limpar o campo de chute automaticamente
     else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");
        }else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();

        }
     
}

//função para gerar um numero aleatório entre o numero escolhido na variavel declarada no inicio e 1.
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    //se a quantidade da lista for igual ao numero limite, reiniciar a lista de números
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    //se o numero aleatorio gerado ja estiver incluido na lista, gerar outro numero aleatorio 
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    //caso contrario, adicionar a lista e exibir no console. Retornar numero aleatorio 
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

//função para limpar o campo de chute
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

//função botão novo jogo, gera um numero secreto, limpa o campo de digitação, reinicia as tentativas, exibe a mensagem inicial, deasabilitar o botão novo jogo.
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

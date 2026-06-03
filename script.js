function verificaNumero() {
  const inputA = document.querySelector("#a");
  const spanResposta = document.querySelector("#resposta");
  const a = +(inputA.value);
  let mensagem;
  let cor;
  if(a < 0) {
    mensagem = "o número informado é negativo";
    cor = "red";
  }else if(a > 0){
    mensagem = "o número informado é inteiro";
    cor = "blue";
  }else {
    mensagem = "o número é zero ou nao foi informado";
    cor = "black";
  }
  spanResposta.innerHTML = '<b>${mensagem}<b>';
  inputA.style.color = cor;
}
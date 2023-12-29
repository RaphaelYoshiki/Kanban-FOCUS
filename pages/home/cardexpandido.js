var corTitulo;
var botaoAdm;
var botaoGep;
var botaoMkt;
var botaoPjt;
var botaoPres;
var botaoCom;
var Card;
var ColunaCard;
var setor;
var sector;

//Adicionar ouvintes para touchscreen
let touchMoved = false;

function attachTouchListeners() {
  const tasks = document.querySelectorAll('.item');
  
  tasks.forEach(task => {
    task.addEventListener('touchstart', function(event) {
      touchMoved = false; // Reinicie a variável para falso a cada novo toque
    });

    task.addEventListener('touchmove', function(event) {
      touchMoved = true; // Se o dedo se mover, defina como true
    });

    task.addEventListener('touchend', function(event) {
      if (!touchMoved) { // Se o dedo não se moveu (ou seja, foi um toque simples)
        event.preventDefault(); // Prevenindo comportamentos padrão
        containerCard(this); // Chame sua função containerCard com a tarefa clicada
      }
    }, { passive: false }); // Permitindo prevenção de comportamento padrão
  });
}


document.addEventListener('DOMContentLoaded', (event) => {
  attachTouchListeners();
});

function attachCloseListeners() {
  const closeButton = document.querySelector('#cardEx .closeButton'); // Certifique-se de ter uma classe ou ID para seu botão de fechar
  
  closeButton.addEventListener('touchstart', function(event) {
    event.preventDefault(); // Prevenindo comportamentos padrão
    closeContainer();
  }, { passive: false }); // Permitindo prevenção de comportamento padrão
}

function attachCloseListeners() {
  const closeButton = document.querySelector('#cardEx .closeButton'); // Certifique-se de ter uma classe ou ID para seu botão de fechar
  
  closeButton.addEventListener('touchstart', function(event) {
    event.preventDefault(); // Prevenindo comportamentos padrão
    closeContainer();
  }, { passive: false }); // Permitindo prevenção de comportamento padrão
}


function botaoColuna()
{
  var local = document.getElementById("botaoColuna");
  var buttonR = document.createElement("button");
  var imageR = document.createElement("img");
  var buttonL = document.createElement("button");
  var imageL = document.createElement("img");
  var colunaAtual = document.createElement("p");

  buttonR.className = "moverButton";
  buttonR.id = "moverButton";
  buttonR.setAttribute('onclick', 'moverColunaA()');
  local.appendChild(buttonR);
  imageR.className = "moverImg";
  imageR.src = "../../src/setaR.png";
  buttonR.appendChild(imageR);

  colunaAtual.className = "movertext";
  colunaAtual.id = "movertext";
  colunaAtual.textContent = ColunaCard.id;
  local.appendChild(colunaAtual);

  buttonL.className = "moverButton";
  buttonL.id = "moverButton";
  buttonL.setAttribute('onclick', 'moverColunaF()');
  local.appendChild(buttonL);
  imageL.className = "moverImg";
  imageL.src = "../../src/setaL.png";
  buttonL.appendChild(imageL);
}

function moverColunaA()
{
  var lista = document.getElementsByClassName("coluna");
  var textColunaAtual = document.getElementById("movertext");
  switch(ColunaCard.id)
  {
    case "backlog":
      lista[3].appendChild(Card);
      textColunaAtual.textContent = lista[3].id;
      ColunaCard = Card.parentNode;
    break;
    case "doing":
      lista[0].appendChild(Card);
      textColunaAtual.textContent = lista[0].id;
      ColunaCard = Card.parentNode;
    break;
    case "review":
      lista[1].appendChild(Card);
      textColunaAtual.textContent = lista[1].id;
      ColunaCard = Card.parentNode;
    break;
    case "done":
      lista[2].appendChild(Card);
      textColunaAtual.textContent = lista[2].id;
      ColunaCard = Card.parentNode;
    break;
  }
}

function moverColunaF()
{
  var lista = document.getElementsByClassName("coluna");
  var textColunaAtual = document.getElementById("movertext");
  switch(ColunaCard.id)
  {
    case "backlog":
      lista[1].appendChild(Card);
      textColunaAtual.textContent = lista[1].id;
      ColunaCard = Card.parentNode;
    break;
    case "doing":
      lista[2].appendChild(Card);
      textColunaAtual.textContent = lista[2].id;
      ColunaCard = Card.parentNode;
    break;
    case "review":
      lista[3].appendChild(Card);
      textColunaAtual.textContent = lista[3].id;
      ColunaCard = Card.parentNode;
    break;
    case "done":
      lista[0].appendChild(Card);
      textColunaAtual.textContent = lista[0].id;
      ColunaCard = Card.parentNode;
    break;
  }
}


function mudar(elemento) {
  switch(elemento.className)
  {
    case "setorButton Adm Fin":
      corTitulo.style.backgroundColor = "rgb(73, 87, 102)";
      botaoAdm.style.backgroundColor = "rgb(73, 87, 102)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";
      sector = "Adm. Financeiro";
    break;
    case "setorButton Marketing":
      corTitulo.style.backgroundColor = "rgb(246, 165, 45)";
      botaoMkt.style.backgroundColor = "rgb(246, 165, 45)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";
      sector="Marketing";
    break;
    case "setorButton GEP":
      corTitulo.style.backgroundColor = "rgb(229, 51, 36)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(229, 51, 36)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";
      sector="GEP";
    break;
    case "setorButton Comercial":
      corTitulo.style.backgroundColor = "rgb(41, 219, 226)";
      botaoCom.style.backgroundColor = "rgb(41, 219, 226)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";
      sector="Comercial";
    break;
    case "setorButton Projetos":
      corTitulo.style.backgroundColor = "rgb(47, 153, 61)";
      botaoPjt.style.backgroundColor = "rgb(47, 153, 61)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPres.style.backgroundColor = "rgb(217, 217, 217)";
      sector="Projetos";
    break;
    case "setorButton Presidência":
      corTitulo.style.backgroundColor = "rgb(139, 95, 164)";
      botaoPres.style.backgroundColor = "rgb(139, 95, 164)";
      botaoAdm.style.backgroundColor = "rgb(217, 217, 217)";
      botaoMkt.style.backgroundColor = "rgb(217, 217, 217)";
      botaoGep.style.backgroundColor = "rgb(217, 217, 217)";
      botaoCom.style.backgroundColor = "rgb(217, 217, 217)";
      botaoPjt.style.backgroundColor = "rgb(217, 217, 217)";
      sector="Pesidência";
    break;
  }
}


function confirmarBox()
{
  document.getElementById("confirmar").style.display = "block";
}

function cancelar()
{
  document.getElementById("confirmar").style.display = "none";
}

function deletar()
{
  cancelar();
  closeContainer();

  // Card.remove(); // Card é o elemento HTML
  showLoading()
  cardService.remove(Card.id)
  .then(() => {
    hideLoading()
  })
  .catch(error => {
    hideLoading()
    console.log(error)
    alert("Erro ao remover tarefa.")
  })
}

function criarBotao(nomeBotao, name)
{
  var local = document.getElementById("setores");
  var espaco = document.createElement("br");
  espaco.className = "setorButton";
  
  nomeBotao.className = "setorButton "+name;
  nomeBotao.setAttribute('onclick', 'mudar(this)');
  local.appendChild(nomeBotao);
  local.appendChild(espaco);
  var buttonText = document.createElement("p");
  buttonText.className = "setortext";
  buttonText.textContent = name;
  nomeBotao.appendChild(buttonText);
}

function containerCard(clickedElement) {

  setTimeout(function() {
    var element = document.querySelector('.is-dragging');

    if (element) {
        // Remova a classe 'is-dragging' do elemento
        element.classList.remove('is-dragging');
    }
  }, 400);

  // Início de função para apagar a imagem fantasma do botão
  var targetNode = document.body; // ou outro elemento alvo
  var config = { childList: true }; // configuração para observar mudanças na lista de filhos

  var callback = function(mutationsList, observer) {
      for(var mutation of mutationsList) {
          if (mutation.type === 'childList') {
              // verifica se um nó filho foi adicionado
              if (mutation.addedNodes.length > 0) {
                  var lastAddedElement = mutation.addedNodes[0];
                  lastAddedElement.remove(); // remove o último elemento adicionado
                  observer.disconnect();
              }
          }
      }
  };
  var observer = new MutationObserver(callback);
  observer.observe(targetNode, config);

  document.getElementById("cardEx").style.display = "block";
  var localDestino


  if (clickedElement.id) {
    showLoading()
    cardService.getCardByUid(clickedElement.id)
    .then(cardJSON => {
      hideLoading()
      let tituloJSON = cardJSON.title
      let atividadeJSON = cardJSON.comment
      let comentarioJSON = cardJSON.description
      let responsavelJSON = cardJSON.responsable
      let calendarioJSON = cardJSON.limitDate


      //salvando na variavel card a tarefa atual
      Card = clickedElement;
      //salvando na variavel ColunaCard a coluna atual do card
      ColunaCard = clickedElement.parentNode;
      //criando o titulo no container do card
      var titulo = document.createElement("textarea");
      titulo.className = "tituloCard";
      titulo.id = "tituloCard";
      titulo.textContent = clickedElement.querySelector(".tasktext").innerText;
      localDestino = document.getElementById("cardEx-content");
      localDestino.appendChild(titulo);
      //criando a box de comentario no container do card
      var boxComentario = document.createElement("textarea");
      boxComentario.className = "boxComentario";
      boxComentario.id = "boxComentario";
      localDestino = document.getElementById("descricao");
      localDestino.appendChild(boxComentario);
      var comentario = clickedElement.querySelector(".comentario");
      //criando a box de atividade
      var boxAtiv = document.createElement("textarea");
      boxAtiv.className = "boxAtividade";
      boxAtiv.id = "boxAtiv";
      localDestino = document.getElementById("atividade");
      localDestino.appendChild(boxAtiv);
      var ativ = clickedElement.querySelector(".atividade");
      //criando a box de responsavel
      var boxResp = document.createElement("textarea");
      boxResp.className = "boxResponsavel";
      boxResp.id = "boxResponsavel";
      localDestino = document.getElementById("responsavel");
      localDestino.appendChild(boxResp);
      var responsavel = clickedElement.querySelector(".responsavel");

      //criando input de calendario
      var inputCalendario = document.createElement("input");
      inputCalendario.className = "data";
      inputCalendario.id = "InputCalendario";
      inputCalendario.type = "date";
      localDestino = document.getElementById("data");
      localDestino.appendChild(inputCalendario);
      var calendario = clickedElement.querySelector(".calendario");

      //criando botão adm fin
      botaoAdm = document.createElement("button");
      criarBotao(botaoAdm, "Adm Fin");
      botaoMkt = document.createElement("button");
      criarBotao(botaoMkt, "Marketing");
      botaoPres = document.createElement("button");
      criarBotao(botaoPres, "Presidência");
      botaoGep = document.createElement("button");
      criarBotao(botaoGep, "GEP");
      botaoPjt = document.createElement("button");
      criarBotao(botaoPjt, "Projetos");
      botaoCom = document.createElement("button");
      criarBotao(botaoCom, "Comercial");
      corTitulo = clickedElement.querySelector(".taskCircle");
      switch(corTitulo.style.backgroundColor)
      {
        case "rgb(139, 95, 164)":
          console.log("pres");
          botaoPres.style.backgroundColor = "rgb(139, 95, 164)";
          botaoPres.value = "ativado";
          setor = "Presidência"
          break;
        case "rgb(73, 87, 102)":
          console.log("Adm");
          botaoAdm.style.backgroundColor = "rgb(73, 87, 102)";
          botaoAdm.value = "ativado";
          setor = "Adm. Financeiro"
          break;
        case "rgb(246, 165, 45)":
          console.log("Mkt");
          botaoMkt.style.backgroundColor = "rgb(246, 165, 45)";
          botaoMkt.value = "ativado";
          setor = "Marketing"
          break;
        case "rgb(229, 51, 36)":
          console.log("GEP");
          botaoGep.style.backgroundColor = "rgb(229, 51, 36)";
          botaoGep.value = "ativado";
          setor = "GEP"
          break;
        case "rgb(47, 153, 61)":
          console.log("Pjt");
          botaoPjt.style.backgroundColor = "rgb(47, 153, 61)";
          botaoPjt.value = "ativado";
          setor = "Projetos"
          break;
        case "rgb(41, 219, 226)":
          console.log("Com");
          botaoCom.style.backgroundColor = "rgb(41, 219, 226)";
          botaoCom.value = "ativado";
          setor = "Comercial"
          break;
      }
      botaoColuna();

      if(comentarioJSON)
      {
        comentario = comentarioJSON;
        boxComentario.textContent = comentario;
      }
      else
      {
        comentario = document.createElement("div");
        comentario.className = "comentario";
        comentario.id = "comentario";
        comentario.style.display = "none";
        clickedElement.appendChild(comentario);
      }
      if(atividadeJSON)
      {
        ativ = atividadeJSON;
        boxAtiv.textContent = ativ;
        console.log("pres1");
      }
      else
      {
        ativ = document.createElement("div");
        ativ.className = "atividade";
        ativ.style.display = "none";
        clickedElement.appendChild(ativ);
      }
      if(responsavelJSON)
      {
        responsavel = responsavelJSON;
        boxResp.textContent = responsavel;
      }
      else
      {
        responsavel = document.createElement("div");
        responsavel.className = "responsavel";
        responsavel.style.display = "none";
        clickedElement.appendChild(responsavel);
      }
      if(calendarioJSON)
      {
        calendario = calendarioJSON;
        console.log(calendario);
        inputCalendario.value = calendario;
      }
      else
      {
        inputCalendario.value = "aaaa-mm-dd";
        calendario = document.createElement("div");
        calendario.className = "calendario";
        calendario.id = "calendario";
        calendario.style.display = "none";
        clickedElement.appendChild(calendario);
      }
    })
    .catch(error => {
      hideLoading()
      console.log(error)
      alert("Erro ao recuperar informações da tarefa.")
    })
  }
  else {
    //salvando na variavel card a tarefa atual
    Card = clickedElement;
    //salvando na variavel ColunaCard a coluna atual do card
    ColunaCard = clickedElement.parentNode;
    //criando o titulo no container do card
    var titulo = document.createElement("textarea");
    titulo.className = "tituloCard";
    titulo.id = "tituloCard";
    titulo.textContent = clickedElement.querySelector(".tasktext").innerText;
    localDestino = document.getElementById("cardEx-content");
    localDestino.appendChild(titulo);
    //criando a box de comentario no container do card
    var boxComentario = document.createElement("textarea");
    boxComentario.className = "boxComentario";
    boxComentario.id = "boxComentario";
    localDestino = document.getElementById("descricao");
    localDestino.appendChild(boxComentario);
    var comentario = clickedElement.querySelector(".comentario");
    //criando a box de atividade
    var boxAtiv = document.createElement("textarea");
    boxAtiv.className = "boxAtividade";
    boxAtiv.id = "boxAtiv";
    localDestino = document.getElementById("atividade");
    localDestino.appendChild(boxAtiv);
    var ativ = clickedElement.querySelector(".atividade");
    //criando a box de responsavel
    var boxResp = document.createElement("textarea");
    boxResp.className = "boxResponsavel";
    boxResp.id = "boxResponsavel";
    localDestino = document.getElementById("responsavel");
    localDestino.appendChild(boxResp);
    var responsavel = clickedElement.querySelector(".responsavel");

    //criando input de calendario
    var inputCalendario = document.createElement("input");
    inputCalendario.className = "data";
    inputCalendario.id = "InputCalendario";
    inputCalendario.type = "date";
    localDestino = document.getElementById("data");
    localDestino.appendChild(inputCalendario);
    var calendario = clickedElement.querySelector(".calendario");

    //criando botão adm fin
    botaoAdm = document.createElement("button");
    criarBotao(botaoAdm, "Adm Fin");
    botaoMkt = document.createElement("button");
    criarBotao(botaoMkt, "Marketing");
    botaoPres = document.createElement("button");
    criarBotao(botaoPres, "Presidência");
    botaoGep = document.createElement("button");
    criarBotao(botaoGep, "GEP");
    botaoPjt = document.createElement("button");
    criarBotao(botaoPjt, "Projetos");
    botaoCom = document.createElement("button");
    criarBotao(botaoCom, "Comercial");
    corTitulo = clickedElement.querySelector(".taskCircle");
    switch(corTitulo.style.backgroundColor)
    {
      case "rgb(139, 95, 164)":
        console.log("pres");
        botaoPres.style.backgroundColor = "rgb(139, 95, 164)";
        botaoPres.value = "ativado";
        setor = "Presidência"
        break;
      case "rgb(73, 87, 102)":
        console.log("Adm");
        botaoAdm.style.backgroundColor = "rgb(73, 87, 102)";
        botaoAdm.value = "ativado";
        setor = "Adm. Financeiro"
        break;
      case "rgb(246, 165, 45)":
        console.log("Mkt");
        botaoMkt.style.backgroundColor = "rgb(246, 165, 45)";
        botaoMkt.value = "ativado";
        setor = "Marketing"
        break;
      case "rgb(229, 51, 36)":
        console.log("GEP");
        botaoGep.style.backgroundColor = "rgb(229, 51, 36)";
        botaoGep.value = "ativado";
        setor = "GEP"
        break;
      case "rgb(47, 153, 61)":
        console.log("Pjt");
        botaoPjt.style.backgroundColor = "rgb(47, 153, 61)";
        botaoPjt.value = "ativado";
        setor = "Projetos"
        break;
      case "rgb(41, 219, 226)":
        console.log("Com");
        botaoCom.style.backgroundColor = "rgb(41, 219, 226)";
        botaoCom.value = "ativado";
        setor = "Comercial"
        break;
    }
    botaoColuna();

    if(comentario!==null)
    {
      comentario = clickedElement.querySelector(".comentario").innerText;
      boxComentario.textContent = comentario;
    }
    else
    {
      comentario = document.createElement("div");
      comentario.className = "comentario";
      comentario.id = "comentario";
      comentario.style.display = "none";
      clickedElement.appendChild(comentario);
    }
    if(ativ!==null)
    {
      ativ = clickedElement.querySelector(".atividade").innerText;
      boxAtiv.textContent = ativ;
      console.log("pres1");
    }
    else
    {
      ativ = document.createElement("div");
      ativ.className = "atividade";
      ativ.style.display = "none";
      clickedElement.appendChild(ativ);
    }
    if(responsavel!==null)
    {
      responsavel = clickedElement.querySelector(".responsavel").innerText;
      boxResp.textContent = responsavel;
    }
    else
    {
      responsavel = document.createElement("div");
      responsavel.className = "responsavel";
      responsavel.style.display = "none";
      clickedElement.appendChild(responsavel);
    }
    if(calendario!==null)
    {
      calendario = clickedElement.querySelector(".calendario").innerText;
      console.log(calendario);
      inputCalendario.value = calendario;
    }
    else
    {
      inputCalendario.value = "aaaa-mm-dd";
      calendario = document.createElement("div");
      calendario.className = "calendario";
      calendario.id = "calendario";
      calendario.style.display = "none";
      clickedElement.appendChild(calendario);
    }
  }
}

function closeContainer() {
  // Obtém o elemento da caixa de diálogo pelo ID e define o estilo de exibição como "none"
  saveCardInBD()
  
  document.getElementById("cardEx").style.display = "none";
  
  if(document.getElementById("tituloCard").value !== "")
  {
    Card.querySelector(".tasktext").textContent = document.getElementById("tituloCard").value;
    document.getElementById("tituloCard").remove();
  }
  else
  {
    document.getElementById("tituloCard").remove();
  }

  Card.querySelector(".comentario").textContent = document.getElementById("boxComentario").value;
  document.getElementById("boxComentario").remove();

  Card.querySelector(".atividade").textContent = document.getElementById("boxAtiv").value;
  document.getElementById("boxAtiv").remove();

  Card.querySelector(".responsavel").textContent = document.getElementById("boxResponsavel").value;
  document.getElementById("boxResponsavel").remove();

  Card.querySelector(".calendario").textContent = document.getElementById("InputCalendario").value;
  document.getElementById("InputCalendario").remove();

  var lista = document.getElementsByClassName("setorButton");
  for(var i = lista.length - 1; i >= 0; i--)
  {
    lista[i].remove()
  }

  lista = document.getElementsByClassName("moverButton");
  for(var i = lista.length - 1; i >= 0; i--)
  {
    lista[i].remove()
  }

  document.getElementById("movertext").remove();

  if(Card.querySelector(".tasktext").textContent !== "Escreva o nome da tarefa")
  {
    console.log("cardService.update(tarefa, Card.id)");
    console.log(cardService.update(tarefa, Card.id));

    Card.style.display = "initial";

    const computedStyle = window.getComputedStyle(Card);
    const orderValue = computedStyle.getPropertyValue('order');

    const tarefa = {
      title: Card.querySelector(".tasktext").textContent,
      description: Card.querySelector(".comentario").textContent,
      comment: Card.querySelector(".atividade").textContent,
      responsable: Card.querySelector(".responsavel").textContent,
      limitDate: Card.querySelector(".calendario").textContent,
      order: orderValue,
      column: ColunaCard.id,
      sector: sector,
    }
    cardService.save(tarefa);

    cardService.update(tarefa, Card.id)
  }
  else
  {
    Card.remove();
  }


}


function saveChangesInBD() {
  console.log("Ou")
  
  if (Card.id) {
    // Edição
    updateCardInBD()
  }
  else {
    // Novo Card
    saveCardInBD()
  }
}


function cardHTMLtoJSON() {

  const computedStyle = window.getComputedStyle(Card);
  const orderValue = computedStyle.getPropertyValue('order');

  const tarefa = {
    title: Card.querySelector(".tituloCard").textContent,
    description: "testeDesc",
    comment: "testeComm",
    responsable: Card.querySelector(".boxResponsavel").textContent,
    limitDate: Card.querySelector(".InputCalendario").textContent,
    order: orderValue,
    column: ColunaCard.id,
    sector: sector,
  }

  console.log(tarefa);
  console.log(Card.id);
  cardService.update(tarefa, Card.id);

  return tarefa;
}


function saveCardInBD() {
  showLoading()
  cardService.save(cardHTMLtoJSON())
  .then(() => {
    hideLoading()
  })
  .catch(error => {
    hideLoading()
    console.log(error)
    alert("Erro ao salvar tarefa.")
  })
}


function updateCardInBD() {
  cardService.update(cardHTMLtoJSON(), Card.id)
  .then(() => {
    hideLoading()
  })
  .catch(error => {
    hideLoading()
    console.log(error)
    alert("Erro ao atualizar tarefa.")
  })
}
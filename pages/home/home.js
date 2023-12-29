const columnsField = {
    Backlog: () => document.getElementById('backlog'),
    Doing: () => document.getElementById('doing'),
    Review: () => document.getElementById('review'),
    Done: () => document.getElementById('done')
}
const elements = {
    backlogBtn: () => document.getElementById('backlogNewCardBtn'),
    doingBtn: () => document.getElementById('doingNewCardBtn'),
    reviewBtn: () => document.getElementById('reviewNewCardBtn'),
    doneBtn: () => document.getElementById('doneNewCardBtn'),
}
    

function logout() {
    showLoading()
    generalService.logout().then(() => {
        hideLoading()
        window.location.href = "../../index.html"
    }).catch(error => {
        hideLoading()
        console.log(error)
        alert("Erro ao deslogar.")
    })
}


firebase.firestore()
    .collection('kanban')
    .orderBy('order')
    .onSnapshot(snapshot => {
        const cards = snapshot.docs.map (doc => ({
            ...doc.data(),
            uid: doc.id
        }))
        addCardsToScreen(cards)
    })


function addCardsToScreen(cardsJSON) {
    const cardsInScreen = document.querySelectorAll(".item")
    
    if (cardsInScreen.length) {
        cardsInScreen.forEach(card => {
            card.remove()
        })
    }
    
    cardsJSON.forEach(card => {
        
        if (isNewCard(card)) {
            createCard(card)
        }
        else {
            if (isColumnChanged(card)) {

                removeCardFromScreen(card)
                createCard(card)
            }
        }  
    })
}


function isNewCard(cardJSON) {
    if (document.getElementById(cardJSON.uid) == null) return true
    
    return false
}


function createCard(cardJSON) {
    const buttonElement = document.createElement("button");
    buttonElement.id = cardJSON.uid
    buttonElement.dataset.column = cardJSON.column
    buttonElement.dataset.order = cardJSON.order
    buttonElement.className = "item";
    buttonElement.setAttribute("onclick", "containerCard(this)");
    buttonElement.setAttribute("draggable", "true");
    buttonElement.addEventListener("dragstart", () => {
        buttonElement.classList.add("is-dragging")
    })
    buttonElement.addEventListener("dragend", () => {
        buttonElement.classList.remove("is-dragging");
        saveDropChanges(buttonElement)
    })

    const pElement = document.createElement("p");
    pElement.className = "tasktext";
    pElement.textContent = cardJSON.title;

    const divElement = document.createElement("div");
    divElement.className = "taskCircle";
    if (cardJSON.sector == 'Projetos') divElement.style.background = "#2F993D"
    else if (cardJSON.sector == 'GEP') divElement.style.background = "#E53324"
    else if (cardJSON.sector == 'Marketing') divElement.style.background = "#F6A52D"
    else if (cardJSON.sector == 'Comercial') divElement.style.background = "#29DBE2"
    else if (cardJSON.sector == 'Adm. Financeiro') divElement.style.background = "#495766"
    else if (cardJSON.sector == 'Presidência') divElement.style.background = "#8B5FA4"

    
    buttonElement.appendChild(pElement);
    buttonElement.appendChild(divElement);

    if (cardJSON.column == 'backlog') columnsField.Backlog().appendChild(buttonElement)
    else if (cardJSON.column == 'doing') columnsField.Doing().appendChild(buttonElement)
    else if (cardJSON.column == 'review') columnsField.Review().appendChild(buttonElement)
    else if (cardJSON.column == 'done') columnsField.Done().appendChild(buttonElement)
}
// Fazer um adapter na leitura dos dados do cartão (FRONT <-> BD)


function isColumnChanged(cardJSON) {
    if (cardJSON.column != document.getElementById(cardJSON.uid).dataset.column) return true
    return false
}


function removeCardFromScreen(cardJSON) {
    document.getElementById(cardJSON.uid).remove()
}

//

function isDropColumnChanged(cardHTML) {
    if (cardHTML.dataset.column != cardHTML.parentNode.id) return true
    return false
}

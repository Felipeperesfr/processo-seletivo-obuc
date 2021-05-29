function createSelector(items){
    return items.map(item => 
        `<option value="${item}">${item}</option>`
    )  
}

function createEmptySelector(){
    return `<option value="" selected disabled hidden>CAMPO DE SELEÇÕES VAZIO</option>`
}

function addToSelector(){
    const dataArray = buildings
    const inputSelector = document.getElementById("selection-id")
    const inputSelectorModal = document.getElementById('modal-select')
    inputSelector.innerHTML = dataArray.length ? `<option value="" disabled selected hidden>Selecione o Prédio desejado</option>` + createSelector(dataArray).join('') : createEmptySelector()
    inputSelectorModal.innerHTML = dataArray.length ? `<option value="" disabled selected hidden>Selecione o Prédio desejado</option>` + createSelector(dataArray).join('') : createEmptySelector()
}

window.addEventListener('load', addToSelector)
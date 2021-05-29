function applyChangesToLT(){
    const ltId = document.getElementsByName('id-to-get-lt').value
    const modalBuilding = document.getElementById('modal-select')
    const modalLt = document.getElementsByName('input-modal')[0].value
    const modalContainer = document.getElementById('modal-container')
    localTrabalho.find(lt => {
        if (lt.id === ltId) {
            lt.building = modalBuilding.options[modalBuilding.selectedIndex].text
            lt.local = modalLt
        }
    })
    modalContainer.classList.remove('show')
    renderTable()
}

function clearInputs(){
    const modalLt = document.getElementsByName('input-modal')
    const addLtName = document.getElementsByName('input-name')
    const mainBuilding = document.getElementById('selection-id')
    const modalBuilding = document.getElementById('modal-select')
    const mainBuilingFather = mainBuilding.parentNode
    const replaceMainBuilding = mainBuilding.cloneNode(true)
    const modalBuildingFather = modalBuilding.parentNode
    const replaceModalBuilding = modalBuilding.cloneNode(true)
    mainBuilingFather.replaceChild(replaceMainBuilding, mainBuilding)
    modalBuildingFather.replaceChild(replaceModalBuilding, modalBuilding)
    addLtName[0].value = ""
    modalLt[0].value = ""
}

function Modal(lt){
    clearInputs()
    const modalContainer = document.getElementById('modal-container')
    const setIdToGetLt = document.getElementsByName('id-to-get-lt')
    const closeModalButton = document.getElementById('modal-close-button')
    const applyChangesButton = document.getElementById('modal-apply-button')
    modalContainer.classList.add('show')
    closeModalButton.addEventListener('click', () => {
        modalContainer.classList.remove('show')
    })
    setIdToGetLt.value = lt.id
    applyChangesButton.addEventListener('click', applyChangesToLT)
}

function deleteLt(lt){
    position = localTrabalho.indexOf(lt)
    localTrabalho.splice(position,1)
    deletedLt.push(lt)
    renderTable()
}

function addNewLt(){
    const addLtName = document.getElementsByName('input-name')[0].value
    const buildingElement = document.getElementById('selection-id')
    const addBuilding = buildingElement.options[buildingElement.selectedIndex].text;
    const lt = {     
        building: addBuilding,
        local: addLtName,
        id: `LT${ids.length}`
    }
    localTrabalho.push(lt)
    ids.push(lt.id)
    renderTable()
    clearInputs()
}

function attachEventsToIcons(){
    const editElements = document.querySelectorAll('[data-action="edit"]')
    const deleteElements = document.querySelectorAll('[data-action="remove"]')
    const newElement = document.getElementById('table-add')
    newElement.addEventListener('click', addNewLt)
    editElements.forEach(element => {
        const ltId = element.closest('[data-lt-id]').getAttribute('data-lt-id')
        const lt = localTrabalho.find(lt => lt.id === ltId)
        element.addEventListener('click', () => Modal(lt))
    })
    deleteElements.forEach(element => {
        const ltId = element.closest('[data-lt-id]').getAttribute('data-lt-id')
        const lt = localTrabalho.find( lt => lt.id === ltId)
        element.addEventListener('click', () => deleteLt(lt))
    })
}


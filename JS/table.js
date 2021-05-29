function createRows(items){
    return items.map(item => `
    <tr data-lt-id="${item.id}">
        <td class="data-building">${item.building}</td>
        <td class="data-local">${item.local}</td>
        <td class="options">
            <a href="#" data-action="edit"><i class="fas fa-edit"></i></a>
            <a href="#" data-action="remove"><i class="fas fa-trash"></i></a>
        </td>
     </tr>   
    `)
}

function createTable(items){
    return `<table class="result-table">
                <tbody>
                <td>Prédio</td>
                <td>Local de Trabalho</td>
                <td></td>
                ${createRows(items).join('')}
                <t/body>
            </table>`
}

function createEmptyTable(){
    return `<p>Não há Local de Trabalho registrado</p>`
}

function renderTable(){
    const mainTable = document.getElementById('main-panel-table')
    mainTable.innerHTML = localTrabalho.length ? createTable(localTrabalho) : createEmptyTable()
    attachEventsToIcons()
}

window.addEventListener('load', renderTable)
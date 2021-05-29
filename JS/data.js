const buildings = ['Prédio1','Prédio2','Prédio3','Prédio4','Prédio5']
const localTrabalho = [
    {
        building: 'Prédio1',
        local: 'Local de Trabalho 1',
        id: 'LT0'
    },
    {
        building: 'Prédio1',
        local: 'Local de Trabalho 2' ,
        id: 'LT1'
    },
]
const ids = []
localTrabalho.forEach(lt => {
  ids.push(lt.id)
})

const deletedLt = []
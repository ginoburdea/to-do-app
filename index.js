const form = document.getElementById('form')
const toDos = document.getElementById('to-dos')
const emptyListMessage = document.getElementById('empty-list-message')

const toDosArr = []

form.addEventListener('submit', e => {
    e.preventDefault()

    const toDoText = document.createElement('p')
    toDoText.innerHTML = form.toDo.value

    const toDoButton = document.createElement('button')
    toDoButton.innerHTML = 'Remove'
    toDoButton.type = 'button'
    toDoButton.addEventListener('click', event => {
        toDos.removeChild(event.target.parentNode)

        if (toDos.childNodes.length === 0) {
            emptyListMessage.hidden = false
        }
    })

    const toDo = document.createElement('div')
    toDo.appendChild(toDoText)
    toDo.appendChild(toDoButton)

    toDos.appendChild(toDo)
    emptyListMessage.hidden = true
})

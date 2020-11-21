'use strict'

let todos = getSavedTodos()

const filters = {
    searchText:'',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-todos').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


document.querySelector('#todo-input').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = (e.target.elements.enterTodo.value).trim()
    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text,
            completed: false
        })
    }
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.enterTodo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos,filters)
})

console.log(todos)


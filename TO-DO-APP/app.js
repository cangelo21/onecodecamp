const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterOption = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Function to save task in your local storage
function savelocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null){
    todos = [];
    } else {
    
        todos = JSON.parse(localStorage.getItem("todos"))

    }
    
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

//  Function to add new task

function addTodo (e) {
    // prevent form submission
    e.preventDefault();

    // creatae a new todo div
   
}
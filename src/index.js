import { UI } from './UI.js';
import { bindEvent } from './bindEvent';

const storage = (() => {

    function saveTodos(todos) {
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    function loadTodos() {
        let res = [];
        let loadedTodos = JSON.parse(localStorage.getItem("todos"));
        loadedTodos.forEach(element => {
            let newTodo = new Todo(element.title, element.description, element.dueDate, element.priority, element.project);
            res.push(newTodo)
        });
        return res;
    }

    return { saveTodos, loadTodos }
})();

function Todo(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project; 

}    

Todo.prototype.updateTodo = function(newTitle, newDescription, newDueDate, newPriority, newProject) {
    this.title = newTitle;
    this.description = newDescription;
    this.dueDate = newDueDate;
    this.priority = newPriority;
    this.project = newProject;
}


export const app = (() => {

    // stores every todo
    let todos = [];    
    
    // cache dom
    const newBookBtn = document.querySelector(".newBookBtn");
    const newTodoForm = document.querySelector(".newTodoForm");
    const todosContainer = document.querySelector(".todos-container");
    const editTodoContainer = document.querySelector(".editTodoContainer")

    const titleInput = document.querySelector("#title")
    const descriptionInput = document.querySelector("#description")
    const duedateInput = document.querySelector("#duedate")
    const priorityInput = document.querySelector("#priority")
    const projectInput = document.querySelector("#project")

    const navProjects = document.querySelector(".navProjects");
    const navHome = document.querySelector(".navHome");
    const navToday = document.querySelector(".navToday");
    const navWeek = document.querySelector(".navWeek");

    // add events
    newBookBtn.addEventListener("click", UI.openNewTodoForm )
    newTodoForm.addEventListener("click", bindEvent.newTodoForm)
    todosContainer.addEventListener("click", bindEvent.todo)
    editTodoContainer.addEventListener("click", bindEvent.editTodo)
    navProjects.addEventListener("click", () => {
        UI.loadProjectsPage(todos);
    })
    navHome.addEventListener("click", () => {
        UI.loadHome(todos);
    });
    navToday.addEventListener("click",  () => {
        UI.loadToday(todos)
    })
    navWeek.addEventListener("click", () => {
        UI.loadWeek(todos)
    })


    // functions
    function addTodo() {
        if(!titleInput.value) {
            alert("You have to fill in a title!")
            return;
        }
        const newTodo = new Todo(titleInput.value, descriptionInput.value, duedateInput.value, priorityInput.value, projectInput.value);
        todos.push(newTodo)
        storage.saveTodos(todos)
        UI.loadHome(todos)
        UI.closeNewTodoForm();
    }
    
    function deleteTodo(index) {
        todos.splice(index, 1);
        UI.loadHome(todos);
        storage.saveTodos(todos)
    }

    function editTodo(index) {
        UI.openEditTodo(todos[index], index)
    }

    function cancelEditTodo() {
        UI.closeEditTodo();
        UI.loadHome(todos);
    }
 
    
    function saveEditTodo(index, newTitle, newDescription, newDueDate, newPriority, newProject) {
        todos[index].updateTodo(newTitle, newDescription, newDueDate, newPriority, newProject);
        UI.closeEditTodo();
        UI.loadHome(todos);
        storage.saveTodos(todos)

    }
  
    function init() {
        todos = storage.loadTodos();
        UI.loadHome(todos)
    }



    init();


    return {addTodo, deleteTodo, editTodo, cancelEditTodo, saveEditTodo}

})();



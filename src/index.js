import { UI } from './UI.js';
import { bindEvent } from './bindEvent';


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

    // add events
    newBookBtn.addEventListener("click", UI.openNewTodoForm )
    newTodoForm.addEventListener("click", bindEvent.newTodoForm)
    todosContainer.addEventListener("click", bindEvent.todo)
    editTodoContainer.addEventListener("click", bindEvent.editTodo)
    navProjects.addEventListener("click", showAllProjects)


    // functions
    function addTodo() {
        if(!titleInput.value) {
            alert("You have to fill in a title!")
            return;
        }
        const newTodo = new Todo(titleInput.value, descriptionInput.value, duedateInput.value, priorityInput.value, projectInput.value);
        todos.push(newTodo)
        UI.loadHome(todos)
        UI.closeNewTodoForm();
    }

    function closeTodoForm() {
        UI.loadHome(todos)
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        UI.loadHome(todos);
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
    }
    
    function init() {
        const dummyTodo1 = new Todo("Titel1eins", "Beschreibung 1", "2022-09-02", "Wichtig", "Schule2")
        const dummyTodo2 = new Todo("Titel1eins", "Beschreibung 1", "2022-09-02", "Wichtig1", "Schule33")
        const dummyTodo3 = new Todo("Titel1eins", "Beschreibung 1", "2022-09-02", "Wichtig2", "Schule55")
        const dummyTodo4 = new Todo("Titel1eins", "Beschreibung 1", "2022-09-02", "Wichtig2", "Schule55")
        todos.push(dummyTodo1)
        todos.push(dummyTodo2)
        todos.push(dummyTodo3)
        todos.push(dummyTodo4)
        
        UI.loadHome(todos);
    }

    function showAllProjects() {
        UI.clearScreen();
        UI.loadProjectsPage(todos)
    }

    init();
    

    return {addTodo, deleteTodo, editTodo, cancelEditTodo, saveEditTodo, closeTodoForm}

})();


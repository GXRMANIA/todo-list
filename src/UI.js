import { app } from './index.js'

const UI = (() => {
    
    // cache dom
    const newTodoForm = document.querySelector(".newTodoForm")
    const todosContainer = document.querySelector(".todos-container");
    const editTodoContainer = document.querySelector(".editTodoContainer")
    const content = document.querySelector("#content");


    function openNewTodoForm() {
        newTodoForm.classList.remove("inactive");
        editTodoContainer.innerHTML = "";
    }

    function closeNewTodoForm() {
        // clear input fields after closing
        newTodoForm.childNodes.forEach((ele) => {
            if(ele.type !== "text") return;
            ele.value = "";
        })
        newTodoForm.classList.add("inactive");
        app.closeTodoForm();
        
        
    }

    function loadHome(todos) {
        todosContainer.innerHTML = "";
        let index = 0;
        todos.forEach(todo => {
            todosContainer.innerHTML +=
            `
            <div class="todo" data-id="${index}">
                <p>${todo.title}</p>
                <p>Due: ${todo.dueDate}</p>
                <input type="button" value="Edit" class="editTodoBtn">
                <input type="button" value="Delete" class="deleteTodoBtn">
            </div>
            `
            index++;
        });
    }

    function hideTodos() {
        todosContainer.innerHTML = "";
    }

    function openEditTodo(todo, index) {
        todosContainer.innerHTML = "";
        closeNewTodoForm();
        editTodoContainer.innerHTML = 
            `
            <div class="editTodo" data-id="${index}">
                <input type="text" value="${todo.title}" class="editTitleInput">
                <input type="text" value="${todo.description}" class="editDescriptionInput">
                <input type="date" value="${todo.dueDate}" class="editDueDateInput"> 
                <select name="priority" id="priority" class="editPriorityInput">
                    <option ${(todo.priority == "low") ? "selected" : ""} value="low">Low</option>
                    <option ${(todo.priority == "mid") ? "selected" : ""} value="mid">Mid</option>
                    <option ${(todo.priority == "high") ? "selected" : ""} value="high">High</option>
                </select>
                <input type="text" value="${todo.project}" class="editProjectInput">
                <input type="button" value="Save" class="saveEditBtn">
                <input type="button" value="Cancel" class="cancelEditBtn">
            </div>
            `
    }

    function closeEditTodo() {
        editTodoContainer.innerHTML = "";
    }

    function loadProjectsPage(todos) {
        content.innerHTML = "";   
        let todosWithSameProject;

        const projectNames = todos.map((todo) => {
            return todo.project;
        })

        let uniqProjets = [...new Set(projectNames)];

        uniqProjets.forEach(project => {
            let todosWithSameProject = todos.filter(todo => {
                if(todo.project === project) {
                    return todo
                }
            })

            const projectContainer = document.createElement("div");
            projectContainer.classList.add("projectContainer");
            
            const projectTitle = document.createElement("div");
            projectTitle.textContent = project;
            projectContainer.appendChild(projectTitle)

            todosWithSameProject.forEach(todo => {
                const projectTodo = document.createElement("div");
                projectTodo.textContent = todo.title;
                projectTodo.classList.add("projectTodos")
                projectContainer.appendChild(projectTodo)
            }) 

            content.appendChild(projectContainer)
        })

    }

    function clearScreen() {
        closeNewTodoForm();
        closeEditTodo();
        hideTodos();
    }


    return { loadProjectsPage, clearScreen, openNewTodoForm, closeNewTodoForm, loadHome, openEditTodo, closeEditTodo }
})();

export { UI }
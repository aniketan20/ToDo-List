// localStorage.clear();

const signOut = document.getElementById("sign-out-cta");
signOut.addEventListener("change" ,(event) => {
    localStorage.clear();
    windows.open("login.html","_self");
}


//For changing views
const radioViewOptions = document.querySelectorAll("input[name='view-option']");
const listView = document.getElementById("list-view");
const boardView = document.getElementById("board-view");

radioViewOptions.forEach((radioButton) => {
    radioButton.addEventListener("change", (event) => {
        const eventTarget = event.target;
        const viewOption = eventTarget.value;

        switch (viewOption) {
            case "list":
                boardView.classList.add("hide");
                listView.classList.remove("hide");
                break;
            case "board":
                listView.classList.add("hide");
                boardView.classList.remove("hide");
            break;
        }
    });
});

//For Rendering Data

const educationTaskList = document.getElementById("education-list");
const educationTaskBoard = document.getElementById("education-board");
const shoppingTaskList = document.getElementById("shopping-list");
const shoppingTaskBoard = document.getElementById("shopping-board");
const meetingTaskList = document.getElementById("meeting-list");
const meetingTaskBoard = document.getElementById("meeting-board");

function renderTasks() {
    tasks.forEach((task, index) => {
        let category = task.category;
        if(category=="Education"){
            const taskItem = document.createElement('ul');
            taskItem.classList.add('tasks-list');
            taskItem.innerHTML += `
                <li class="task-item">
                    <button class="task-button">
                        <p class="task-name">
                            ${task.topic}
                        </p>
                        <p class="task-due-date">
                            Due on ${task.dueDate}
                        </p>
                        <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black" width="18" height="18" class="arrow-icon"></iconify-icon>
                    </button>
                </li>
            `
            educationTaskList.appendChild(taskItem);

            educationTaskBoard.innerHTML += `
            <ul class="tasks-list pink">
                <li class="task-item">
                    <button class="task-button">
                        <div>
                            <p class="task-name">
                                ${task.topic}
                            </p>
                            <p class="task-due-date">Due on ${task.dueDate}</p>
                        </div>
                        <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black" width="18" height="18" class="arrow-icon"></iconify-icon>
                    </button>
                </li>
            </ul>
            `
        }
        if(category=="Shopping"){
            const taskItem = document.createElement('ul');
            taskItem.classList.add('tasks-list');
            taskItem.innerHTML += `
                <li class="task-item">
                    <button class="task-button">
                        <p class="task-name">
                            ${task.topic}
                        </p>
                        <p class="task-due-date">
                            Due on ${task.dueDate}
                        </p>
                        <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black" width="18" height="18" class="arrow-icon"></iconify-icon>
                    </button>
                </li>
            `
            shoppingTaskList.appendChild(taskItem);

            shoppingTaskBoard.innerHTML += `
            <ul class="tasks-list blue">
                <li class="task-item">
                    <button class="task-button">
                        <div>
                            <p class="task-name">
                                ${task.topic}
                            </p>
                            <p class="task-due-date">Due on ${task.dueDate}</p>
                        </div>
                        <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black" width="18" height="18" class="arrow-icon"></iconify-icon>
                    </button>
                </li>
            </ul>
            `
        }
        if(category=="Meetings"){
            const taskItem = document.createElement('ul');
            taskItem.classList.add('tasks-list');
            taskItem.innerHTML += `
                <li class="task-item">
                    <button class="task-button">
                        <p class="task-name">
                            ${task.topic}
                        </p>
                        <p class="task-due-date">
                            Due on ${task.dueDate}
                        </p>
                        <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black" width="18" height="18" class="arrow-icon"></iconify-icon>
                    </button>
                </li>
            `
            meetingTaskList.appendChild(taskItem);
            

            meetingTaskBoard.innerHTML += `
            <ul class="tasks-list green">
                <li class="task-item">
                    <button class="task-button">
                        <div>
                            <p class="task-name">
                                ${task.topic}
                            </p>
                            <p class="task-due-date">Due on ${task.dueDate}</p>
                        </div>
                        <iconify-icon icon="material-symbols:arrow-back-ios-rounded" style="color: black" width="18" height="18" class="arrow-icon"></iconify-icon>
                    </button>
                </li>
            </ul>
            `
        }
    });
}

//For Adding Task

const addTaskCTA = document.getElementById("add-task-cta");
const setTaskOverlay = document.getElementById("set-task-overlay");
const closeButtons = document.querySelectorAll(".close-button");
const taskAddFrom = document.getElementById("add-task-form");
let activeOverlay = null;
const topicInput = document.getElementById("name");
const descriptionInput = document.getElementById("description");
const dateInput = document.getElementById("due-date");
const categoryInput = document.getElementById("category");

// const topicInput = document.getElementById("name")
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTaskCTA.addEventListener("click", ()=>{
    setTaskOverlay.classList.remove("hide");
    activeOverlay = setTaskOverlay;
    document.getElementById("content-container").style.display="overflow-hidden";
});

taskAddFrom.addEventListener("submit", function(event){
    event.preventDefault();
    const newTask = {
        topic: topicInput.value,
        description: descriptionInput.value,
        dueDate: dateInput.value,
        category: categoryInput.value
    }
    tasks.push(newTask);
    saveTasks();

    taskAddFrom.reset();
    activeOverlay.classList.add("hide");
    activeOverlay = null;
    document.getElementById("content-container").style.display="";
});
renderTasks();

closeButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        activeOverlay.classList.add("hide");
        activeOverlay = null;
        document.getElementById("content-container").style.display="";
    });
});


// Viewing Task
const taskItems = document.querySelectorAll(".list-button");
const viewTaskOverlay = document.getElementById("view-task-overlay");

taskItems.forEach((task)=>{
    task.addEventListener("click",()=>{
        viewTaskOverlay.classList.remove("hide");
        activeOverlay = viewTaskOverlay;
        console.log(activeOverlay);
        document.getElementById("content-container").style.display="overflow-hidden";
    });
})

// Delete Notification 
const deleteTaskCTA = document.getElementById("delete-task-cta");
const notification = document.getElementById("notification");

deleteTaskCTA.addEventListener("click", () => {
    activeOverlay.classList.add("hide");
    activeOverlay = null;
    document.getElementById("content-container").style.display="";
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
});

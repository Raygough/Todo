const addTaskButton = document.getElementById('add-task');
const taskListArea = document.getElementById('all-tasks');
const userInput = document.getElementById('create-task');


addTaskButton.addEventListener("click", function () {
    if (userInput.value == ""){
        alert("Please enter a todo task");
    } else if (!(userInput.value == "")){
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        const newTask = document.createElement("div");
        newTask.className = "new-task";
        const taskDiv = document.createElement("div");
        taskDiv.className = "taskDiv";
        deleteButton.className = "delete-button";
        newTask.textContent = userInput.value;
        deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        taskDiv.append(newTask);
        taskDiv.append(deleteButton)
        taskListArea.append(taskDiv);
        userInput.value = "";
        deleteButton.addEventListener('click', function(){
            taskDiv.remove();
            deleteButton.remove();
        })
    }
});

userInput.addEventListener('keydown', function(event){
    if (event.code == "Enter" && userInput.value == ""){
        alert("Please enter a todo task");
    } else if (event.code == "Enter" && !(userInput.value == "")){
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        const newTask = document.createElement("div");
        newTask.className = "new-task";
        const taskDiv = document.createElement("div");
        taskDiv.className = "taskDiv";
        deleteButton.className = "delete-button";
        newTask.textContent = userInput.value;
        deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        taskDiv.append(newTask);
        taskDiv.append(deleteButton)
        taskListArea.append(taskDiv);
        userInput.value = "";
        deleteButton.addEventListener('click', function(){
            taskDiv.remove();
            deleteButton.remove();
        })
    }
})






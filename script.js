let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        name: task,
        completed: false
    });

    input.value = "";

    saveTasks();

    displayTasks();
}

function displayTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        let span = document.createElement("span");

        span.textContent = task.name;

        if (task.completed) {
            span.classList.add("completed");
        }

        span.addEventListener("click", function() {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            displayTasks();
        });

        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });
}

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

displayTasks();
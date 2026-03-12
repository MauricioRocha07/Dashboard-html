export function initTasks() {
    const taskList = document.getElementById("task-list");
    const taskInput = document.getElementById("new-task-input");
    const addTaskBtn = document.getElementById("add-task-btn");

    if (!taskList || !taskInput || !addTaskBtn) return;

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("dashboard_tasks")) || [];
        taskList.innerHTML = "";
        tasks.forEach(task => createTaskItem(task));
    }

    function saveTask() {
        const tasks = Array.from(taskList.children).map(item => item.textContent);
        localStorage.setItem("dashboard_tasks", JSON.stringify(tasks));
    }

    function createTaskItem(text) {
        const li = document.createElement("li");
        li.textContent = text;
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
            saveTask();
        });
        taskList.appendChild(li);
    }

    addTaskBtn.addEventListener("click", () => {
        const text = taskInput.value.trim();
        if (text !== "") {
            createTaskItem(text);
            taskInput.value = "";
            saveTask();
        }
    });

    loadTasks();
}

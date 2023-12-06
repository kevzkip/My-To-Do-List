let tasks = [];
let darkMode = false;

function addTask() {
  const taskInput = document.getElementById('new-task');
  if (taskInput.value.trim() !== '') {
    tasks.push(taskInput.value.trim());
    taskInput.value = '';
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('tasks');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `
      <input type="text" value="${task}" readonly>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(taskElement);
  });
}

function toggleTheme() {
  darkMode = !darkMode;
  document.body.classList.toggle('dark-mode');
  document.querySelector('.container').classList.toggle('dark-mode');
}

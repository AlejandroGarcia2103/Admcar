document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <span class="edit-btn" onclick="editTask(this)">Editar</span>
            <span class="delete-btn" onclick="deleteTask(this)">Eliminar</span>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function editTask(editBtn) {
    const taskItem = editBtn.parentElement.previousElementSibling;
    const currentText = taskItem.textContent;
    const newText = prompt('Editar tarea:', currentText);

    if (newText !== null && newText.trim() !== '') {
        taskItem.textContent = newText.trim();
    }
}

function deleteTask(deleteBtn) {
    const taskItem = deleteBtn.parentElement.parentElement;
    taskItem.remove();
}

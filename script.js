const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';

        li.querySelector('.deleteBtn').addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.querySelector('.editBtn').addEventListener('click', () => {
            const span = li.querySelector('span');
            const newText = prompt('Edit tugas:', span.textContent);
            if (newText !== null && newText.trim() !== '') {
                span.textContent = newText.trim();
            }
        });
    }
}

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
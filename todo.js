function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<span>${taskText}</span> <button class="deleteBtn" onclick="deleteTask(this)">Delete</button>`;

      listItem.querySelector('span').addEventListener('click', () => {
        listItem.querySelector('span').classList.toggle('completed');
      });

      document.getElementById('todoList').appendChild(listItem);

      taskInput.value = '';
    }
  }

  function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
  }
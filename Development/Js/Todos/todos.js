fetch('Mockdata.json')
  .then(response => response.json())
  .then(data => {
    const incompleteTasksContainer = document.getElementById('incompleteTasks');
    const completedTasksContainer = document.getElementById('completedTasks');

    data.forEach(item => {
      const taskElement = document.createElement('div');
      taskElement.textContent = item.name;

      if (item.status === 'completed') {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox-${item.id}`;
        taskElement.prepend(checkbox);
        completedTasksContainer.appendChild(taskElement);
      } else {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox-${item.id}`;
        taskElement.prepend(checkbox);
        incompleteTasksContainer.appendChild(taskElement);
      }
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });

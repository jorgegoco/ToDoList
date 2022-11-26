import { idNumber, renameIds } from './utilities.js';

const items = document.querySelector('.items');
let current = null;

const addDynamicElements = (toDoList, i) => {
  const div = document.createElement('div');
  div.className = 'task';
  div.id = `task${i + 1}`;
  const box = document.createElement('input');
  box.type = 'checkbox';
  box.className = 'checkbox';
  box.checked = toDoList.arrayTasks[i].completed;
  div.appendChild(box);
  const taskToDo = document.createElement('input');
  taskToDo.className = 'taskToDo';
  taskToDo.value = toDoList.arrayTasks[i].description;
  if (box.checked) {
    taskToDo.classList.add('taskToDoChecked');
  } else {
    taskToDo.classList.remove('taskToDoChecked');
  }
  div.appendChild(taskToDo);
  const ellipsis = document.createElement('i');
  ellipsis.className = 'fa fa-ellipsis-v';
  div.appendChild(ellipsis);
  items.appendChild(div);
  if (!taskToDo.parentNode.classList.contains('highlightedTask')) {
    taskToDo.addEventListener('click', () => {
      taskToDo.parentNode.classList.add('highlightedTask');
      taskToDo.nextElementSibling.className = 'fa fa-trash-o fa-lg';
    });
  }

  taskToDo.addEventListener('input', (e) => toDoList.updateTask(idNumber(taskToDo.parentNode.id), e.target.value));
  document.addEventListener('click', (e) => {
    if (taskToDo.parentNode.classList.contains('highlightedTask') && e.target !== taskToDo && e.target !== taskToDo.nextElementSibling) {
      taskToDo.parentNode.classList.remove('highlightedTask');
      taskToDo.nextElementSibling.className = 'fa fa-ellipsis-v';
    }
  });
  ellipsis.addEventListener('click', () => {
    if (ellipsis.className === 'fa fa-trash-o fa-lg') {
      ellipsis.parentNode.classList.remove('highlightedTask');
      ellipsis.className = 'fa fa-ellipsis-v';
      toDoList.removeTask(idNumber(ellipsis.parentNode.id));
      ellipsis.parentNode.remove();
      renameIds();
    }
  });
  box.addEventListener('change', () => {
    const checkboxIndex = idNumber(box.parentNode.id);
    if (box.checked) {
      toDoList.updateCheckbox(checkboxIndex, true);
      box.nextElementSibling.classList.add('taskToDoChecked');
    } else {
      toDoList.updateCheckbox(checkboxIndex, false);
      box.nextElementSibling.classList.remove('taskToDoChecked');
    }
  });

  document.querySelector('.footerText').addEventListener('click', () => {
    toDoList.deleteChecked();
    items.querySelectorAll('.task').forEach((element) => {
      if (element.firstChild.checked) {
        element.remove();
      }
    });
    renameIds();
  });

  taskToDo.draggable = true;

  taskToDo.addEventListener('dragstart', () => {
    current = idNumber(taskToDo.parentNode.id);
  });

  taskToDo.addEventListener('dragover', (e) => e.preventDefault());

  taskToDo.addEventListener('drop', (e) => {
    e.preventDefault();
    const dropValue = idNumber(taskToDo.parentNode.id);
    if (dropValue !== current) {
      toDoList.swapTasks(current - 1, dropValue - 1);
      if (current < dropValue) {
        document.getElementById(`task${dropValue}`).after(document.getElementById(`task${current}`));
      } else {
        document.getElementById(`task${dropValue}`).before(document.getElementById(`task${current}`));
      }
      renameIds();
    }
  });
};

export { addDynamicElements as default };
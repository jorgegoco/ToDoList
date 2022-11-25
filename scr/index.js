import './style.css'
import Tasks from './modules/tasksclass.js';
import addDynamicElements from './modules/dynamic.js';

const toDoList = new Tasks();

for (let i = 0; i < toDoList.arrayTasks.length; i += 1) {
  addDynamicElements(toDoList, i);
}

document.querySelector('.addTaskText').addEventListener('change', (e) => {
  const addElement = toDoList.addTask(e.target.value);
  e.target.value = '';
  if(addElement) addDynamicElements(toDoList, toDoList.arrayTasks.length - 1);
});

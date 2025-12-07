import { addTask, toggleTask, filterTasks } from "./funcoes.js";
import { renderTasks } from "./dom.js";

let tasks = [];

const form = document.getElementById("taskForm");
const titleInput = document.getElementById("title");
const priorityInput = document.getElementById("priority");
const list = document.getElementById("list");
const filterSelect = document.getElementById("filter");
const stats = document.getElementById("stats");

function update() {
  const filtered = filterTasks(tasks, filterSelect.value);
  renderTasks(filtered, list, toggle);

  const completed = tasks.reduce(
    (acc, task) => task.completed ? acc + 1 : acc,
    0
  );
  stats.textContent = `${tasks.length} tarefas • ${completed} concluídas`;
}

function toggle(id) {
  tasks = toggleTask(tasks, id);
  update();
}

form.onsubmit = e => {
  e.preventDefault();
  tasks = addTask(tasks, titleInput.value, priorityInput.value);
  titleInput.value = "";
  update();
};

filterSelect.onchange = update;

update();

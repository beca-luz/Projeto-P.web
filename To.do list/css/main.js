import { Tarefa } from "./classes.js";
import { renderizarTarefas } from "./dom.js";

let tarefas = [];

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");

form.addEventListener("submit", event => {
  event.preventDefault();

  if (input.value.trim() === "") return;

  const tarefa = new Tarefa(input.value);
  tarefas.push(tarefa);

  input.value = "";
  renderizarTarefas(tarefas);
});

renderizarTarefas(tarefas);

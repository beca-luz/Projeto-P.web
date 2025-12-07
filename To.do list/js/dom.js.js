
export function renderizarTarefas(tarefas) {
  lista.innerHTML = "";

  if (tarefas.length === 0) {
    vazio.style.display = "block";
    lista.style.display = "none";
    return;
  }

  vazio.style.display = "none";
  lista.style.display = "block";

  tarefas.forEach(tarefa => {
    const li = document.createElement("li");
    li.textContent = tarefa.titulo;

    if (tarefa.concluida) {
      li.classList.add("done");
    }

    li.addEventListener("click", () => {
      tarefa.toggle();
      renderizarTarefas(tarefas);
    });

    lista.appendChild(li);
  });
}

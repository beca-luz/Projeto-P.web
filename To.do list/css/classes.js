export class Task {
  constructor(id, title, priority, completed = false) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.completed = completed;
  }  }

  export class Tarefa {
  constructor(titulo) {
    this.titulo = titulo;
    this.concluida = false;
  } }

  toggle() {
    this.concluida = !this.concluida;
  }



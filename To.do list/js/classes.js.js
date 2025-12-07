export class Task {
  constructor(id, title, priority, completed = false) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.completed = completed;
  }

  toggle() {
    this.completed = !this.completed;
  }
}

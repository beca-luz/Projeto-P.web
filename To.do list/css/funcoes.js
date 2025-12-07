import { Task } from "./classes.js";

export function addTask(tasks, title, priority) {
  const id = Date.now();
  const newTask = new Task(id, title, priority);
  return [...tasks, newTask];
}

export function toggleTask(tasks, id) {
  return tasks.map(task => {
    if (task.id === id) {
      task.toggle();
    }
    return task;
  });
}

export function filterTasks(tasks, filter) {
  if (filter === "completed") {
    return tasks.filter(t => t.completed);
  }
  if (filter === "active") {
    return tasks.filter(t => !t.completed);
  }
  return tasks;
}

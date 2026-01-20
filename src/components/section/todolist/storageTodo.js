export const TODO_STORAGE_KEY = "todo_list";

export function getTodosFromStorage() {
  return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || [];
}

export function saveTodosToStorage(todos) {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
}
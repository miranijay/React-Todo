const todoKey = "reactTodo";

// localStorage.clear();
export const getLocalStorageTodo = () => {
    const rawTodo = localStorage.getItem(todoKey);
    return rawTodo ? JSON.parse(rawTodo) : [];
}

export const setLocalStorageTodo = (tasks) => {
    return localStorage.setItem(todoKey, JSON.stringify(tasks));
}
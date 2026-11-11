import { useState } from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";

//starts list of tasks
const INITIAL_TODOS = [
  { id: 1, text: "Read the lab README", done: true },
  { id: 2, text: "Build the to-do list", done: false },
  { id: 3, text: "Add one of your own", done: false },
];

export default function App() {

//stores the current to do list
  const [todos, setTodos] = useState(INITIAL_TODOS);

//adds new tasks to list
  function addTodo(text) {
    const id = Math.max(0, ...todos.map(t => t.id)) + 1;
    setTodos([...todos, { id, text, done: false }]);
  }

//Switch a task between completed and not completed
  function toggleTodo(id) {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

//Removes tasks
  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

//counts how many are done and many there is in total
  const done = todos.filter(t => t.done).length;
  const total = todos.length;


  return (
    <main className="app">
      <h1>My To-Dos</h1>
      <AddTodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <p className="count">{done} of {total} done</p>
 344ec3b04f8904176f0a6f62952f1cd7410324dd
    </main>
  );
}

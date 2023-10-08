import todoLogo from "./assets/todo.svg";
import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  return (
    <>
      <a href="" target="_blank" rel="noreferrer">
        <img src={todoLogo} className="logo" alt="Todo logo" />
      </a>

      <h1 className="text-4xl font-bold text-gray-800 my-4">Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </>
  );
}

export default App;

import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import Logo from "./Logo";

function App() {
  return (
    <>
      <Logo />
      <h1 className="text-4xl font-bold text-gray-800 my-4">Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </>
  );
}

export default App;

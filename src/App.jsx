import todoLogo from "./assets/todo.svg";
import "./App.css";

const todoList = [
  {
    id: 1,
    title: "Item 1",
  },
  {
    id: 2,
    title: "Item 2",
  },
  {
    id: 3,
    title: "Item 3",
  },
];

function App() {
  return (
    <>
      <a href="" target="_blank" rel="noreferrer">
        <img src={todoLogo} className="logo" alt="Todo logo" />
      </a>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todoItem) => (
          <li key={todoItem.id}>{todoItem.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

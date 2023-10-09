import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import Logo from "./Logo";
// import Form from "./Form";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";

function App() {
  return (
    <>
      <Logo />
      <h1 className="my-4 text-4xl font-bold text-gray-800">Todo List</h1>
      <AddTodoForm />
      <TodoList />
      {/* <Form /> */}
      <Form4 />
      <Form3 />
      <Form2 />
    </>
  );
}

export default App;

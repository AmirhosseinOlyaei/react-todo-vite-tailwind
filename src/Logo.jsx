import todoLogo from "./assets/todo.svg";

function Logo() {
  return (
    <a href="" target="_blank" rel="noreferrer">
      <img src={todoLogo} className="logo" alt="Todo logo" />
    </a>
  );
}

export default Logo;

function AddTodoForm() {
  return (
    <form className="">
      <label htmlFor="todoTitle">Title</label>
      <input type="text" id="todoTitle"></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;

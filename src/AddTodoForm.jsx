function AddTodoForm() {
  return (
    <div className="w-full max-w-xs border-none form-control">
      <label className="label">
        <span htmlFor="todoTitle" className="label-text">
          Title
        </span>
      </label>
      <input
        type="text"
        id="todoTitle"
        placeholder="New task...  "
        className="w-full max-w-xs input input-bordered"
      />
      <button type="submit" className="mt-1 btn">
        Add
      </button>
    </div>
  );
}

export default AddTodoForm;

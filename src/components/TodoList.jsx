function TodoList({ task, taskDate }) {
  return (
    <div className="container todo-container mb-3">
      <div className="row">
        <div className="col-6">
          <h5>{task}</h5>
        </div>
        <div className="col-4">
          <h5>{taskDate}</h5>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger todo-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoList;

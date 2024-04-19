function AddTodo() {
  return (
    <div className="container todo-container mb-3">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your task"
            />
          </div>
          <div className="col-4">
            <input className="form-control" type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-primary todo-button">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;

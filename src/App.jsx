import Heading from "./components/Heading";
import AddTodo from "./components/AddTodo";
import TodoList1 from "./components/TodoList1";
import TodoList2 from "./components/TodoList2";

function App() {
  return (
    <>
      <center className="container">
        <Heading />
        <AddTodo />
        <TodoList1 />
        <TodoList2 />
      </center>
    </>
  );
}

export default App;

import Heading from "./components/Heading";
import AddTodo from "./components/AddTodo";
import TodoLists from "./components/TodoLists";

function App() {
  const todoItems = [
    {
      task: "Buy Milk",
      taskDate: "20/04/2024",
    },
    {
      task: "Learn React",
      taskDate: "21/04/2024",
    },
    {
      task: "Learn React and practice",
      taskDate: "22/04/2024",
    },
  ];
  return (
    <>
      <center className="container">
        <Heading />
        <AddTodo />
        <TodoLists todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;

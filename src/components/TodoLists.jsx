import TodoList from "./TodoList";
const TodoLists = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((items) => (
        <TodoList
          key={items.task}
          task={items.task}
          taskDate={items.taskDate}
        />
      ))}
    </>
  );
};
export default TodoLists;

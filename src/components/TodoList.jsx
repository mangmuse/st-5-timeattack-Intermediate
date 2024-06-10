import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList({ isDone }) {
  const todos = useSelector((state) => state.todo.todos);
  const filteredTodos = filterTodos(todos, isDone);
  return (
    <section>
      <h2>{isDone ? "Completed!" : "Working..."}</h2>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} isDone={isDone} />
        ))}
      </ul>
    </section>
  );
}

function filterTodos(todos, isDone) {
  return todos.filter((todo) => todo.isDone === isDone);
}

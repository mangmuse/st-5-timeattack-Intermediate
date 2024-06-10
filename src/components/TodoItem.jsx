import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem({ todo, isDone }) {
  const dispatch = useDispatch();
  const handleUpdate = () => {
    const updatedTodo = { ...todo, isDone: !todo.isDone };
    dispatch(updateTodo(updatedTodo));
  };
  const handleDelete = () => dispatch(deleteTodo(todo.id));
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {todo.title}</p>
        <p>내용: {todo.content}</p>
      </section>
      <section>
        <button onClick={handleUpdate}>{isDone ? "취소" : "완료"}</button>
        <button onClick={handleDelete}>삭제</button>
      </section>
    </li>
  );
}

import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../redux/slices/todoSlice";

const initialTexts = { title: "", content: "" };
export default function TodoForm() {
  const dispatch = useDispatch();
  const [texts, setTexts] = useState(initialTexts);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setTexts((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content } = texts;
    if (title.trim() === "" || content.trim() === "") {
      alert("asd");
      return;
    }
    const newTodo = {
      id: uuid(),
      ...texts,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTexts(initialTexts);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label id="title">제목: </label>
      <input
        value={texts.title}
        onChange={handleChange}
        id="title"
        type="text"
      />{" "}
      <label id="content">내용: </label>
      <input
        value={texts.content}
        onChange={handleChange}
        id="content"
        type="text"
      />
      <button>추가</button>
    </form>
  );
}

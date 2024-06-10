import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { minusNumber, plusNumber } from "./redux/slices/calculatorSlice";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const [num, setNum] = useState(0);
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();
  const handleCalculate = (e) => {
    if (e.target.name === "plus") {
      dispatch(plusNumber(+num));
    } else {
      dispatch(minusNumber(+num));
    }
  };
  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />{" "}
        만큼을
        <button name="plus" onClick={handleCalculate}>
          더할게요
        </button>{" "}
        <button name="minus" onClick={handleCalculate}>
          뺄게요
        </button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;

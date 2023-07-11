import { useState } from "react";
import Button from "../../UI/Button";
import "./GoalsInput.css";

function GoalsInput(props) {
  const [inputValue, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(inputValue);
  };
  
  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <label id="title">Course Goals</label>
      <input type="text" id="goal-input" onChange={inputHandler} />
      <Button />
    </form>
  );
}
export default GoalsInput;

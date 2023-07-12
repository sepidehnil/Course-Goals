import { useState } from "react";
import Button from "../../UI/Button";
import "./GoalsInput.css";

function GoalsInput(props) {
  const [inputValue, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(inputValue);
  };

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <label id="title" style={{ color: !isValid ? "red" : "black" }}>
        Course Goals
      </label>
      <input
        type="text"
        id="goal-input"
        style={{
          borderColor: !isValid ? "red" : "black",
          backgroundColor: !isValid ? "rgb(251, 158, 158)" : "transparent",
        }}
        onChange={inputHandler}
      />
      <Button>Add Goal</Button>
    </form>
  );
}
export default GoalsInput;

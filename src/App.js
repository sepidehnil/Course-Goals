import { useState } from "react";
import GoalsItem from "./components/GoalItems/GoalsItem";
import GoalsInput from "./components/GoalsInput/GoalsInput";

import "./index.css";
function App() {
  const [courseGoals, setCourseGoals] = useState("");

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({
        text: enteredText,
        id: crypto.randomUUID().toString(),
      });
      return updatedGoals;
    });
    console.log(courseGoals);
  };
  function deleteItemsHandler(goalId) {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  }

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = courseGoals.map((goal) => (
      <GoalsItem
        key={goal.id}
        id={goal.id}
        text={goal.text}
        onDelete={deleteItemsHandler}
      />
    ));
  }

  return (
    <div>
      <div className="container">
        <GoalsInput onAddGoal={addGoalHandler} />
      </div>
      {content}
    </div>
  );
}

export default App;

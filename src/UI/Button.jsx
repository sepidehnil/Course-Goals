import React from "react";
// import { styled } from "styled-components";
import styles from "./Button.module.css";

//styled component
// const Button = styled.button`
//   padding: 8px 10px;
//   background-color: rgb(252, 38, 138);
//   border: none;
//   border-radius: 5px;
//   @media (min-width: 768px) {
//     width: 80px;
//   }
// `;

//css modules
function Button() {
  return (
    <div>
      <button className={styles.button}>Add Goal</button>
    </div>
  );
}

export default Button;

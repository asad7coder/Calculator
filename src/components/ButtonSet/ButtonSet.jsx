import React from "react";
import styles from "./ButtonSet.module.css";
const ButtonSet = ({ onButton }) => {
  const buttonValue = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      {buttonValue.map((btnValue) => (
        <button
          key={btnValue}
          onClick={() => onButton(btnValue)}
          type="button"
          className={`btn btn-light ${styles.btnSection}`}
        >
          {btnValue}
        </button>
      ))}
    </>
  );
};

export default ButtonSet;

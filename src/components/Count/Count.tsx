import React, { useContext } from "react";
import { TodoContext } from "../../hooks/TodoContext";
import { ITodo } from "../../types/interfaces";
import Chips, { ChipType } from "../UI/Chips/Chips";
import InlineFlex from "../UI/Layout/InlineFlex/InlineFlex";

function Count() {
  const todos = useContext(TodoContext);
  function countCompleted(todos: ITodo[]): number {
    return todos.filter((e) => e.completed === true).length;
  }

  function countUncompleted(todos: ITodo[]): number {
    return todos.filter((e) => e.completed === false).length;
  }

  return (
    <InlineFlex style={{ paddingBottom: "16px" }}>
      <h2>Total count:</h2>
      <Chips type={ChipType.done}>{countCompleted(todos)} done</Chips>
      <Chips type={ChipType.undone}>{countUncompleted(todos)} undone</Chips>
    </InlineFlex>
  );
}

export default Count;

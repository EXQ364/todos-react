import classnames from "classnames";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ITodo } from "../../types/interfaces";
import styles from "./TodoCard.module.css";

interface ITodoCard {
  todo: ITodo;
  index: number;
}

const TodoCard = (props: React.PropsWithChildren<ITodoCard>) => {
  const todo = { ...props.todo };
  return (
    <Draggable draggableId={todo.id.toString()} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={classnames(
            styles.todoCard,
            todo.completed === true ? styles.done : styles.undone
          )}
        >
          {" "}
          {todo.title}
        </div>
      )}
    </Draggable>
  );
};

export default TodoCard;

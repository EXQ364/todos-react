import React, { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import { TodoContext } from "../../../hooks/TodoContext";
import TodoCard from "../../TodoCard/TodoCard";
import styles from "./ListColumn.module.css";

interface Props {
  id: string;
}

const ListColumn = (props: Props) => {
  const todos = useContext(TodoContext);
  return (
    <Droppable droppableId={props.id}>
      {(provided) => (
        <div
          className={styles.listColumn}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {todos.map((todo, index) => {
            return <TodoCard key={todo.id} index={index} todo={todo} />;
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ListColumn;

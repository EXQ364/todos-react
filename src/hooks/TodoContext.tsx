import React from "react";
import { ITodo } from "../types/interfaces";

export const TodoContext = React.createContext<ITodo[]>([]);

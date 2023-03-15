import React, { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import "./App.css";
import Wrapper from "./components/UI/Wrapper/Wrapper";
import InlineFlex from "./components/UI/Layout/InlineFlex/InlineFlex";
import { ITodo } from "./types/interfaces";
import { TodoContext } from "./hooks/TodoContext";
import Count from "./components/Count/Count";
import ListColumn from "./components/Count/ListColumn/ListColumn";
import axios from "axios";
import Button from "./components/UI/Button/Button";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

export default function App() {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/todos?_limit=100")
			.then((res) => {
				const doneTodos = res.data.filter((todo: ITodo) => todo.completed);
				const undoneTodos = res.data.filter(
					(todo: ITodo) => !todo.completed
				);
				setTodos([...doneTodos, ...undoneTodos]);
			});
	}, []);

	const doneTodos = todos.filter((todo) => todo.completed);
	const undoneTodos = todos.filter((todo) => !todo.completed);

	const onDragEnd = (result: DropResult) => {
		const { source, destination } = result;

		// dropped outside the list
		if (!destination) {
			return;
		}

		if (source.droppableId === destination.droppableId) {
			const temp =
				destination.droppableId === "done"
					? [...doneTodos]
					: [...undoneTodos];

			const [removed] = temp.splice(source.index, 1);
			temp.splice(destination.index, 0, removed);

			destination.droppableId === "done"
				? setTodos([...temp, ...undoneTodos])
				: setTodos([...doneTodos, ...temp]);
		} else {
			let destStatus = false;
			if (destination.droppableId === "done") {
				destStatus = true;
			} else {
				destStatus = false;
			}

			let tempDest, tempSource;
			if (destination.droppableId === "done") {
				tempDest = [...doneTodos];
				tempSource = [...undoneTodos];
			} else {
				tempDest = [...undoneTodos];
				tempSource = [...doneTodos];
			}

			const [removed] = tempSource.splice(source.index, 1);

			tempDest.splice(destination.index, 0, removed);

			tempDest[destination.index].completed = destStatus;

			setTodos([...tempSource, ...tempDest]);
		}
	};

	return (
		<Wrapper>
			<Header />

			<TodoContext.Provider value={todos}>
				<Count />
			</TodoContext.Provider>

			<InlineFlex>
				<DragDropContext onDragEnd={onDragEnd}>
					<TodoContext.Provider value={undoneTodos}>
						<ListColumn id={"undone"} />
					</TodoContext.Provider>

					<Button
						title="All done"
						cb={() => {
							const newTodos: ITodo[] = todos.map((todo) => {
								if (todo.completed === false)
									todo.completed = !todo.completed;
								return todo;
							});
							setTodos(newTodos);
						}}
					/>

					<TodoContext.Provider value={doneTodos}>
						<ListColumn id={"done"} />
					</TodoContext.Provider>
				</DragDropContext>
			</InlineFlex>
		</Wrapper>
	);
}

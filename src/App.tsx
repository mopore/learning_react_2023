import React from "react";
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { MarcelButton } from "./MarcelButton";

export type Todo = {
	id: string;
	title: string;
	completed: boolean;
}

export default function App() {
	const [todos, setTodos] = React.useState<Todo[]>([]);

	const addTodo = (title: string) => {
		setTodos( currentTodos => {
			return [
				...currentTodos,
				{ id: crypto.randomUUID(), title: title, completed: false},
			]
		});
	}

	const toggleTodo = (id: string, completed: boolean) => {
		setTodos(currentTodos => {
			return currentTodos.map(todo => {
				if (todo.id === id) {
					return {...todo, completed};
				}
				return todo;
			});
		});
	}

	const deleteTodo = (id: string) => {
		setTodos(currentTodos => {
			return currentTodos.filter(todo => todo.id !== id);
		});
	}

	return (
		<>
			<NewTodoForm onSubmit={addTodo}/>
			<h1 className="header">Todo List</h1>
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
			<MarcelButton />
		</>
	);
}
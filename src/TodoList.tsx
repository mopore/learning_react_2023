import { Todo } from "./App";
import { TodoItem } from "./TodoItem";

export function TodoList(
	props: { 
		todos: Todo[],
		toggleTodo: (id: string, completed: boolean) => void,
		deleteTodo: (id: string) => void
	}
) {
	const {todos, toggleTodo, deleteTodo} = props;
	return (
		<ul className="list">
			{todos.length === 0 && <li className="list-item">No items</li>}
			{todos.map((todo) => {
			return (
				<TodoItem 
					{...todo} 
					key={todo.id} 
					toggleTodo={toggleTodo} 
					deleteTodo={deleteTodo} 
				/>
			);
			})}
		</ul>
	);
}
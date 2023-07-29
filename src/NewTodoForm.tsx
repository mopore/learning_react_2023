import React from "react";

export function NewTodoForm(
	props: { 
		onSubmit: (title: string) => void 
	}
){

	const [newItem, setNewItem] = React.useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (newItem === "") return;

		console.log(`Adding "${newItem}" to the list`);
		props.onSubmit(newItem);

		setNewItem("");
	}

	return (
		<form onSubmit={handleSubmit} className="new-item-form">
			<div className="form-row">
				<label htmlFor="item">New Item</label>
				<input 
					type="text" 
					value={newItem} 
					id="item" 
					onChange={(e) => setNewItem(e.target.value)}
				/>
			</div>
			<button className="btn">Add</button>
		</form>
	);
}
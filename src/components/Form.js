const Form = ({ input, setInput, todos, setTodos, setStatus}) => {
	//(1)ascolto l'input inserito dall'utente 
	const inputHandler = (e) => {
		
		//valorizziamo input (senza non fa scrivere)
		setInput(e.target.value);
	}
	
	//(2)al submit creiamo un object con valori
	const submitTodo = (e) => {

		e.preventDefault();
		
		//valorizziamo todos
		setTodos([
			...todos, 
			{
				text: input,
				completed: false,
				id: Math.random() * 1000
			}
		]);
		//reset del campo input dopo l'invio
		setInput('');
	};

	//(6) ascolto l'input della select (all,completed,uncompleted, verificare nella console)
	const statusHandler = (e) => {

		setStatus(e.target.value);
	}

    return (
		<form>
			<input 
				type="text" 
				className="todo-input"
				placeholder="Create a task..."
				//(1)
				onChange={inputHandler}
				value={input}
			/>

			<button 
				className="todo-button" 
				type="submit"
				//(2) 
				onClick={submitTodo}>
				<i className="fas fa-plus-square"></i>
			</button>

			<div className="select">
				<select 
					name="todos" 
					className="filter-todo"
					onChange={statusHandler}					
				>
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form> 
    );
}

export default Form;
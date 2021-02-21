import Todo from './Todo.js';

const TodoList = ( { todos, setTodos, filteredTodos } ) => {

    return (
		<div className="todo-container">
            <ul className="todo-list">
                {   //(3)mappiamo l'oggetto ritornato
                    //(3)per ogni todo submittata, creami un componente Todo.js

                    //(prima del filtro mappavamo su todos, adesso direttamente sui dati filtrati nell'App.js)
                    filteredTodos.map(todo => (
                        //(3)passiamo il prop text dall'oggetto passato
                        //(4)diamo una key al todo, che sarà l'id creato in Form
                        <Todo 
                            key={todo.id} 
                            text={todo.text}
                            //(4) (passiamoli da App.js qui, per poi passarli alla Todo singola)
                            todos={todos}
                            setTodos={setTodos}
                            //(4) mi passo la singola todo
                            todo={todo}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;
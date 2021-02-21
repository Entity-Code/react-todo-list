const Todo = ( { text, todos, todo, setTodos } ) => {
    //(4) Events
    //(4) cancellazione
    const deleteHandler = () => {
        //(4)una volta presi todos e setTodos da App.js/TodoList.js
        //filtrami solo gli elementi con lo stesso id (quindi nessuno, cancellandolo)
        setTodos(todos.filter(el => el.id !== todo.id));   
    };

    //(5) completamento
    const completeHandler = () => {
        
        setTodos(
            todos.map(item => {
                if (item.id === todo.id) {
                    return {
                        ...item, completed: !item.completed
                    }
                }
                return item;
            })
        )
    }

    return (
                // se todo.completed è true, aggiungi la classe 'completed'
        <div className={"todo" + (todo.completed ? " completed" : '')}>
             <li className="todo-item">{text}</li> {/* //(3) */}
                {/* complete button */}
                <button onClick={completeHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                
                {/* delete button */}
                <button onClick={deleteHandler} className={"trash-btn"}>
                    <i className="fas fa-trash"></i>
                </button>
        </div>
    );
}

export default Todo;
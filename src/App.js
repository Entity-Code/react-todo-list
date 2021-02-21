import React, { useState, useEffect, ReactCSSTransitionGroup } from "react";
import './App.css';
//Import components
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {

  //states
  //(1) (input text)
  const [input, setInput] = useState(''); 
  //(2)(todo list)
  const [todos, setTodos] = useState([]); //(2)array vuoto che andrà a riempirsi con gli oggetti creati nel form
  //(6) (filter)
  const [status, setStatus] = useState('all');
  //(6) (filtered data)
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Esegui una volta appena viene aperta l'app
  useEffect(() => {
    getLocalTodos();
  },[])

  //use effect
  useEffect(() => {
    //codice eseguito ad ogni cambiamento
    filterHandler();
    saveLocalTodos();
  }, [todos, status]) //ogni volta che il valore di todos cambia mi esegue il codice sopra (sia quando creiamo una todo, o modifichiamo)

  //functions (importare useEffect sopra) (filtriamo i dati)
  const filterHandler = () => {
    switch (status) {
      //nel caso sia selezionato 'completed'
      case 'completed':
          //fammi vedere le todo con completed === true
          setFilteredTodos(todos.filter(todo => (
            todo.completed === true
          )))
        break;
      
      //nel caso sia selezionato 'completed'
        case 'uncompleted':
          //fammi vedere le todo con completed === false
          setFilteredTodos(todos.filter(todo => (
            todo.completed === false
          )))
        break;
      
      //se è selezionato All, allora mostrami tutta la lista todos
      default:
        setFilteredTodos(todos);
        break;
    }
  }


  //(7) save to local (richiamata nell'effect sopra)
  const saveLocalTodos = () => {  
    //prendiamo i dati presenti e li pushiamo nella memoria browser
    localStorage.setItem("todos", JSON.stringify(todos));  
  };
  const getLocalTodos = () => {
    //se non abbiamo nulla, setta un array vuoto
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else { //altrimenti prendi la roba presente e valorizza la todos con quei dati
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
  }; 


  return (
    <div className="App">
      <header>
        <h1>Mat Todo List</h1>
      </header>
      <Form 
        //(1)
        input={input} 
        setInput={setInput}
        //(2)
        todos={todos} 
        setTodos={setTodos}
        //(6) (filter)(passiamo al form perché è lì che si trova la select)
        setStatus={setStatus}
        

      />
      <TodoList
        //(3) (4)
        todos={todos}
        //(4) (passiamo entrambi alla todo list)
        setTodos={setTodos}
        //(6) (filter) (passiamo i dati filtrati alla todolist)
        filteredTodos = {filteredTodos}

      />
   
    </div>
  );
}

export default App; 

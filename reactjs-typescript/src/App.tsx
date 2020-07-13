import React from 'react';
import TodoList from "./components/ToDoList";
import NewTodo from "./components/NewTodo";

function App() {
	const todos = [ { id: 't1', text: 'Finish the course'}];
	const todoAddHandler = (text: string) => {

	}
  return (
    <div className="App">
		<NewTodo onAddHandler={todoAddHandler}/>
		<TodoList items={todos}/>
    </div>
  );
}

export default App;

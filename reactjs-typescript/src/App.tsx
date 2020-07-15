import React, { useState } from 'react';
import TodoList from "./components/ToDoList";
import NewTodo from "./components/NewTodo";
import {Todo} from './todo.model';

function App() {
	const [todos, setTodos] = useState<Todo[]>([])
	const todoAddHandler = (text: string) => {
		setTodos(prevTodos => [...prevTodos, { id: 't1', text: 'Finish the course'}])
	}
	const todoDeleteHandler = (todoId: string) => {
		setTodos(prevTodos => {
			return prevTodos.filter(todo => todo.id !== todoId);
		})
	}
  return (
    <div className="App">
		<NewTodo onAddTodo={todoAddHandler}/>
		<TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;

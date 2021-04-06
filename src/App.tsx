import React, { useState } from 'react';
import { TodoList } from './TodoList';
import {AddTodoForm} from './AddTodoForm';

// Some new lessons:

// Spread syntax (...) allows an iterable such as an array expression or string
// to be expanded in places where zero or more args or elements are expected or
// an object expression to be expanded in places ehre zero or more key-value
// pairs are expected
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Map () Function
// It is used to iterate over an array and manipulate or change data items
// In React, it most commonly used for rendering a list of data to the DOM.
// https://www.pluralsight.com/guides/how-to-use-the-map()-function-to-export-javascript-in-react


const initialTodos: Todo[] = [
  {
    text: 'walk the dog',
    complete: false,
  },
  {
    text: 'write app',
    complete: true,
  },
];


function App() {

  
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo){
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = {text, complete: false};
    setTodos([...todos, newTodo]);
  };

  return (
    <>
  <TodoList todos={todos} toggleTodo={toggleTodo} />
  <AddTodoForm addTodo={addTodo}/>
</>
)
}

export default App;
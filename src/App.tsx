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

  //Tasks with states to be updated
  const [todos, setTodos] = useState(initialTodos);

  //
  const toggleTodo = (selectedTodo: Todo) => {
    
    //change the state of an existing task if selected to the opposite state
    //and since the data is saved in an array we use map() to update it 
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo){
        //return the task with a different boolean value
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos); //the updated state
  };

  //Adding tasks to the arrary of todos
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
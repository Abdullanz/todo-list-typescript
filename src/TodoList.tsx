import React from 'react';
import { TodoListItem } from './TodoListItem';

//interface for the properties of this component
interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

//functional component that returns the TodoItem components
export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
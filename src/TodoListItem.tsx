import React from 'react';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

//FC stands for functional component and we pass props
//as a generic
export const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {
  return (
      <li>
          <label style={{textDecoration: todo.complete ? 'line-though': undefined}}>
            <input 
            type="checkbox" 
            checked={todo.complete}
            onClick={()=> {
                toggleTodo(todo);
            }}
            /> {' '}
            {todo.text}
          </label>
      </li>
  );
};
import * as React from "react";
import CSS from 'csstype'

// define the used props in this component
interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const liStyle: CSS.Properties = {
  listStyle: 'none',
  marginBottom: '5px'
}

const inputStyle: CSS.Properties = {
  marginRight: '10px'
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li style={liStyle}>
      {/* Label style, check if todo = complete. If complete, then style as linethrough */}
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          /* when checked, set complete in prop todo */
          checked={todo.complete}
          /* onClick trigger toggleTodo */
          onClick={() => {
            toggleTodo(todo);
          }}
          style={inputStyle}/>{" "}
        {todo.text}
      </label>
    </li>
  );
};

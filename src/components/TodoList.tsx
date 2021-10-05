import * as React from "react";
import { TodoListItem } from "./TodoListItem";
import CSS from 'csstype'

// define used props from global types
interface Props{
  todos: Todo[];
  toggleTodo: ToggleTodo
}

const ulStyle: CSS.Properties = {
  paddingInlineStart: 0,
  marginBottom: '20px'
}

export const TodoList: React.FC<Props> = ({todos, toggleTodo}) => {
  return(
    <ul style={ulStyle}>
      {todos.map(todo => (
        <TodoListItem todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  )
}
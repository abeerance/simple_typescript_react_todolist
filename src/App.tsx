import * as React from "react";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";
import CSS from "csstype";
import bgWrapper from './assets/bg-wrapper.jpeg'

const contentWrapper: CSS.Properties = {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: 'relative',
  zIndex: 10,
  backgroundImage: `url(${bgWrapper})`,
  backgroundRepeat: 'none',
  backgroundSize: 'cover'
};

const todoListWrapper: CSS.Properties = {
  width: '600px',
  padding: '2em',
  display: "flex",
  flexDirection: 'column',
  background: 'rgba(255, 255, 255, 0.6)',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  borderRadius: '15px', 
  position: 'relative',
  zIndex: 100
}

const initialTodos: Todo[] = [
  {
    text: "Check out typescript react",
    complete: false,
  },
  {
    text: "Read about typescript react",
    complete: false,
  },
  {
    text: "Create a typescript react project",
    complete: false,
  },
  {
    text: "Configure the typescript react project as a todo list",
    complete: false,
  },
];

function App() {
  const [todos, setTodos] = React.useState(initialTodos);

  // toggleTodo function
  const toggleTodo = (selectedTodo: Todo) => {
    /* map all todos as todo */
    const newTodos = todos.map((todo) => {
      /* if todo === selectedTodo then toggle complete prop */
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // addTodo function
  const addTodo: AddTodo = (text: string) => {
    const newTodo = {text, complete:false }
    setTodos([...todos, newTodo])
  }

  return (
    <div style={contentWrapper}>
      <div style={todoListWrapper}>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

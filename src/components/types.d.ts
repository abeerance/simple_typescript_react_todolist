// define global types for props

// Todo type
interface Todo {
  text: string;
  complete: boolean;
}

// ToggleTodo type
type ToggleTodo = (selectedTodo: Todo) => void;

// AddToDo type
type AddTodo = (text: string) => void;

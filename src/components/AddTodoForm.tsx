import * as React from "react";
import CSS from 'csstype'

interface Props {
  addTodo: AddTodo;
}

const borderStyle: CSS.Properties = {
  marginTop: '15px',
  border: 'none',
  width: '70%',
  borderBottom: '1.5px solid #15395e',
  padding: '0.5em 0.5em 0 0.5em',
  marginRight: '25px',
  background: 'none'
}

const buttonStyle: CSS.Properties = {
  alignItems: 'center',
  background: '#15395e',
  border: 0,
  borderRadius: '100px',
  color: '#fff',
  display: 'inline-flex',
  fontSize: '15px',
  justifyContent: 'center',
  lineHeight: '30px',
  padding: '0 20px',
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = React.useState("");

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        style={borderStyle}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText("");
        }}
        style={buttonStyle}
      >
        Add Todo
      </button>
    </form>
  );
};

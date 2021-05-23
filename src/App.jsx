import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeToText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComp = (index) => {
    const newIncompTodos = [...incompleteTodos];
    newIncompTodos.splice(index, 1);

    const newcompTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompTodos);
    setcompleteTodos(newcompTodos);
  };
  const onClickBack = (index) => {
    const newcompTodos = [...completeTodos];
    newcompTodos.splice(index, 1);

    const newIncompTodos = [...incompleteTodos, completeTodos[index]];
    setcompleteTodos(newcompTodos);
    setIncompleteTodos(newIncompTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeToText}
        onClick={onClickAdd}
        disabled={IncompleteTodos.length > 5}
      />
      {IncompleteTodos.length > 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個までです。</p>
      )}

      <IncompleteTodos
        todo={incompleteTodos}
        onClickComp={onClickComp}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

export default App;

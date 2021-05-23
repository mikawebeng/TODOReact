import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <>
      <div disabled={disabled} className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
        <button disabled={disabled} onClick={onClick}>
          追加
        </button>
      </div>
    </>
  );
};

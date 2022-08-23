import React from 'react';
import IconSun from '../../images/icon-sun.svg'

function TodoHeader() {
  return (
    <div className="todo__header">
        <h1 className="h1">Todo</h1>
        <button className="toggle-theme">
            <img src={IconSun} alt="light-mode" />
        </button>
    </div>
  );
}

export default TodoHeader;
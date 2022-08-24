import { React, useState } from 'react';
import IconSun from '../../images/icon-sun.svg'
import IconMoon from '../../images/icon-moon.svg'

function TodoHeader({ theme, setTheme }) {

  function changeTheme() {
    switch (theme) {
      case "dark":
        setTheme("light")  
        break;
      case "light":
        setTheme("dark")  
        break;
      default:
        setTheme("dark")  
        break;
    }
  }

  return (
    <div className="todo__header">
        <h1 className="h1">Todo</h1>
        <button onClick={changeTheme} className="toggle-theme">
            {theme === "dark" ? <img src={IconSun} alt="light" /> : <img src={IconMoon} alt="dark-mode" />}
        </button>
    </div>
  );
}

export default TodoHeader;
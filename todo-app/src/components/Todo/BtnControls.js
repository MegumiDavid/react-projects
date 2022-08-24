import React from 'react';

function BtnControls({ todoList, setTodoList, btnValue, setBtnValue, itensLeft }) {  

  function btnListener(e) {
    switch (e.target.id) {
      case 'all-1':
        setBtnValue('all')  
        break;
      case 'all-2':
        setBtnValue('all')
        break;
      case 'active-1':
        setBtnValue('active')
        break;
      case 'active-2':
        setBtnValue('active')
        break;
      case 'completed-1':
        setBtnValue('completed')
        break;
      case 'completed-2':
        setBtnValue('completed')
        break;
      default:
        setBtnValue('all')
        break;
    }
  }

  function clearCompleted() {
    setTodoList( 
      todoList.filter( todoItem => {
        return todoItem.check === false
      })
    )
  }

  function btnClearListener() {
    clearCompleted()
  }


  return (
    <>
        <div className="list-controls">
            <div className="itens-left">{itensLeft} items left</div>
            <div className="list-controls__buttons hide-for-mobile">
                <button onClick={btnListener} id="all-1" className={"all " + (btnValue === 'all' ? 'selected' : '')}>All</button>
                <button onClick={btnListener} id="active-1" className={"active " + (btnValue === 'active' ? 'selected' : '')}>Active</button>
                <button onClick={btnListener} id="completed-1" className={"completed  " + (btnValue === 'completed' ? 'selected' : '')}>Completed</button>
            </div>
            <button onClick={btnClearListener} id="clear-completed" className="clear-completed">Clear Completed</button>
        </div>

        <div className="buttons hide-for-desktop">
            <button onClick={btnListener} id="all-2" className="all selected">All</button>
            <button onClick={btnListener} id="active-2" className="active">Active</button>
            <button onClick={btnListener} id="completed-2" className="completed">Completed</button>
        </div>
    </>
  )
}

export default BtnControls;
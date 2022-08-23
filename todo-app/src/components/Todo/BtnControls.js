import React from 'react';

function BtnControls() {
  return (
    <div>
        <div className="list-controls">
            <div className="itens-left">5 items left</div>
            <div className="list-controls__buttons hide-for-mobile">
                <button className="all selected">All</button>
                <button className="active">Active</button>
                <button className="completed">Completed</button>
            </div>
            <button className="clear-completed">Clear Completed</button>
        </div>
        <div className="buttons hide-for-desktop">
            <button className="all selected">All</button>
            <button className="active">Active</button>
            <button className="completed">Completed</button>
        </div>
    </div>
  )
}

export default BtnControls;
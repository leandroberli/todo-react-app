import React from 'react'

function Task(props) {
  return(
    <div className="task-container">
      <h3 className="task" id={props.id}>{props.value}</h3>
      <div className="button-container">
        <button className="delete-button" onClick={() => {props.handleDelete(props.id)}} >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Task

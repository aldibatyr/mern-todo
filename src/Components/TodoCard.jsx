import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TodoCard = ({ props }) => {
  return (
    <div className="todo-card">
      <div className="card-responsible-title">
        <h4>{props.responsible}</h4>
      </div>
      <div className="card-description">
        <p>{props.description}</p>
      </div>
      <div className="card-controls-and-priority">
        <div className="priority-indicator">
          <p>{props.priority}</p>
        </div>
        <div className="completed-check-button">
          <Link to={`/edit/${props._id}`}>
            <Button>
              Edit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TodoCard;
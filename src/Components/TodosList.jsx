import React, { useState, useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TodoCard from './TodoCard';
import axios from 'axios';

const TodoList = () => {
  const url = 'http://localhost:8000/todos';

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const res = await axios.get(url);
        setTodos(res.data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="create-view">
      <Row className="view-header">
        <h3>All ToDos</h3>
      </Row>
      <Row>
        {error ? (
          <div className="error-message">
            <h4>We encountered error: {error}</h4>
          </div>
        ) : (
            loading ? (
              <Spinner animation="border" role="status" >
                <span className="sr-only">Loading ...</span>
              </Spinner>
            ) : (
                todos.map((todo, i) => (
                  <TodoCard props={todo} key={i} />
                ))
              )
          )}


      </Row>
    </div >
  )
}

export default TodoList
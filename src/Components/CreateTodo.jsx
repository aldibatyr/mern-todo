import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';


const CreateTodo = () => {

  const [description, setDescription] = useState('');
  const [responsible, setResponsible] = useState('');
  const [priority, setPriority] = useState('');
  const [completed, setCompleted] = useState(false);


  const submitAction = (e) => {
    e.preventDefault();


    console.log(description, responsible, priority, completed);
    setDescription('');
    setResponsible('');
    setPriority('');
    setCompleted(false);
  }
  return (
    <div className="create-view">
      <Row>
        <h3>Create New Todo</h3>
      </Row>
      <Row>
        <div className="form-container">
          <Form onSubmit={e => submitAction(e)}>
            <Form.Group controlId='formDescription'>
              <Form.Label>Description:</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              <Form.Text className='text-muted'>
                What is this todo all about?
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='formResponsible'>
              <Form.Label>Responsible:</Form.Label>
              <Form.Control
                type="text"
                value={responsible}
                onChange={e => setResponsible(e.target.value)}
              />
            </Form.Group>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className='form-check-input'
                  type="radio"
                  name="priorityOptions"
                  id="priorityLow"
                  value="Low"
                  onChange={e => setPriority(e.target.value)}
                />
                <label className="form-check-label" htmlFor="priorityLow">Low</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className='form-check-input'
                  type="radio"
                  name="priorityOptions"
                  id="priorityMedium"
                  value="Medium"
                  onChange={e => setPriority(e.target.value)}
                />
                <label className="form-check-label" htmlFor="priorityMedium">Medium</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className='form-check-input'
                  type="radio"
                  name="priorityOptions"
                  id="priorityHigh"
                  value="High"
                  onChange={e => setPriority(e.target.value)}
                />
                <label className="form-check-label" htmlFor="priorityHigh">High</label>
              </div>
            </div>
            <div className="form-group">
              <div className="button-wrapper">
                <input type="submit" value="Create Todo" className="btn btn-primary" />
              </div>
            </div>
          </Form>
        </div>
      </Row>


    </div>
  )
}

export default CreateTodo
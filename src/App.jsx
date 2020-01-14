import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import TodoList from './Components/TodosList';
import CreateTodo from './Components/CreateTodo';
import EditTodo from './Components/EditTodo';
import Navigation from './Components/Navigation';


function App() {

  const click = () => {
    console.log('clicked')
  }
  return (
    <div className="App">
      <Navigation/>
      <div className="container">
        <Route exact path='/' component={TodoList} />
        <Route exact path='/create' component={CreateTodo} />
        <Route path='/create/:id' component={EditTodo} />
      </div>
    </div>
  );
}

export default App;

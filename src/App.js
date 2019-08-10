import React, { Component }from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Walk the dogs',
        completed: false
      },
      {
        id: 2,
        title: 'Feed the dogs',
        completed: false
      },
      {
        id: 3,
        title: 'Take our the trash',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id ===id) {
        todo.completed = !todo.completed
      }
      return todo
    })});
  }

  deleteTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const newTodo = {
      id: randomId,
      title: title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;

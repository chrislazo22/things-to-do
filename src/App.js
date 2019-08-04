import React, { Component }from 'react';
import Todos from './components/Todos';

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

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import TodoList from './TodoList/TodoList';

class App extends Component {
  state = {
    username: 'Thomas',

    usernameEntered: false,

    todo: '',

    todos: ['Do good things', 'Talk about it'],
  }

  updateUsername = ({target}) => {
    const username = target.value;

    this.setState({username});
  }

  saveUsername = () => {
    this.setState({
      usernameEntered: true
    })
  }

  storeTodo = ({target}) => {
    const todo = target.value;

    this.setState({todo});
  }

  addTodo = () => {
    const todos = [...this.state.todos, this.state.todo];

    this.setState({todos});
  }

  removeTodo = (todo) => {
    const todos = [...this.state.todos];
    
    todos.splice(this.state.todos.indexOf(todo), 1);

    this.setState({todos});
  }

  render() {
    return (
      <div className="App">

        {!this.state.usernameEntered
          ?
            <UserInput
              username={this.state.username}
              onChangeInput={this.updateUsername}
              onClickButton={this.saveUsername}
            />
          :
            <div>
              <UserOutput
                username={this.state.username}
              />
  
              <TodoList
                todos={this.state.todos}
                onChangeInput={this.storeTodo}
                onClickButton={this.addTodo}
                onClickTodo={this.removeTodo}
              />
            </div>
        }
      </div>
    );
  }
}

export default App;

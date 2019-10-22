import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/title';
import Task from './components/task';
import TaskList from './components/task-list';
import Layout from './components/layout';
import Input from './components/input';

class App extends Component {

  //constructor
  constructor(props){
    super(props)
    this.state = {
      newTask : "",
      tasks: [],
    }
  }

  //manejador input
  handleTaskChange = (event) => {
    this.setState({
      newTask: event.target.value,
    })
  }

  //manejador submit
  handleSubmit = (event) => {
    event.preventDefault()
    let newTasks = this.state.tasks
    newTasks.push(this.state.newTask)
    this.setState({
      newTask: "",
      tasks: newTasks
    })
  }

  handleDelete = (id) => {
    let newTasks = this.state.tasks;
    newTasks.splice(id, 1)
    this.setState({
      tasks: newTasks,
    })
  }

  //render
  render() {
    return(
      <Layout>
        <Title />
        <Input
          handleSubmit={this.handleSubmit}
          handleTaskChange={this.handleTaskChange}
          value={this.state.newTask}
        />
        <TaskList
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
        />
      </Layout>
    )
  }

}
export default App;

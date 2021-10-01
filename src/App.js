import { Component } from 'react'
import React from 'react';
import To_do_list from './components/TO-DO-LIST';
import RenderTo from './components/renderTO_DO_LIST';
class App extends Component {
  state = {
    TO_DO_LIST: [
    ]
  }
  addState = (a) => {
    a.id = Math.random()
    a.textDecoration = ''
    a.button = "btn btn-success"
    a.decordation = 'fa fa-check'
    this.setState({
      TO_DO_LIST: [...this.state.TO_DO_LIST, a]
    })
  }
  deleteState = (id) => {
    let TO = this.state.TO_DO_LIST.filter(TO_DO => TO_DO.id !== id)
    this.setState({
      TO_DO_LIST: TO
    })
  }
  change = (id) => {
    let changeArray = this.state.TO_DO_LIST.map((to) => {
      if (to.id == id) {
        to.textDecoration = !to.textDecoration ? 'line-through' : ''
        to.decordation = to.decordation == 'fa fa-check' ? 'fa fa-times' : 'fa fa-check'
        to.button = to.button == "btn btn-success" ? "btn btn-warning" : "btn btn-success"
      }
      return to
    }
    )
    this.setState({
      TO_DO_LIST: changeArray
    })
  }
  render() {
    return (
      <div style={{ backgroundColor: '#f1faee', height: '100vh' }} >
        <h1 className="mt-3 mb-3 ms-5 badge bg-danger">TO_DO_LIST</h1>
        <RenderTo TO_DO_LIST={this.state.TO_DO_LIST} deleteState={this.deleteState} change={this.change} />
        <To_do_list addState={this.addState} />
      </div>
    );
  }
}

export default App;

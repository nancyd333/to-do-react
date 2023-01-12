
import React, { Component } from 'react'
import ListItem from './ListItem'

class MyList extends Component {
  state = {
    taskArray: this.props.theList,
    newItem: ''
  }

  clearList = () => {
    //console.log("clearing list")
    this.setState({
        taskArray: []
      })
  }

  handleChange = e => {
    //console.log(e.target.value)
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = e => {
    e.preventDefault()
    this.setState(prevState => {
      return{  
      taskArray: [...prevState.taskArray, prevState.newItem],
      newItem: ''
      }
    })

  }

  render() {
    const todoItems = this.state.taskArray.map((item, idx) => (
      <div>
        <ListItem task={item} key={`listitem-${idx}`} />
      </div>
    ))

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>

        <ul>
          {todoItems}

        </ul>
        <form onSubmit={this.addItem}>
          <input type="text" placeholder="Type an item here" onChange={this.handleChange} value={this.state.newItem} />
          <button type="submit">Add it!</button>
        </form>
        <button onClick={this.clearList}>Clear List</button>
      </div>
    )
  }
}

export default MyList
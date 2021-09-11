import React, { Component } from 'react'
import Man from './man'

export default class App extends Component {

  state = {
    manchester: [
      {name: "Cristiano Ronaldo", age: 36, id: 1},
      {name: "Edinson Cavani", age: 34, id: 2},
      {name: "Jadon Sancho", age: 21, id: 3},
      {name: "Mason Greenwood", age: 19, id: 4},
      {name: "Paul Pogba", age: 28, id: 5},
      {name: "Bruno Fernandes", age: 27, id: 6}
    ]
  }


  // handleChange = (e) => {
  //   this.setState({
  //     name: e.target.value
  //   })
  // }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("form submited successfully ", this.state.name);
  // }

  render() {
    return (
      <div className="App">
        <Man manchester={this.state.manchester} />
      </div>
    )
  }
}


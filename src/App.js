import React, { Component } from 'react'
import Man from './man'

export default class App extends Component {

  state = {
    manchester: [
      {name: "Cristiano Ronaldo", id: 1},
      {name: "Edinson Cavani", id: 2},
      {name: "Jadon Sancho", id: 3}
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


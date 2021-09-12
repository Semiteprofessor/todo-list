import React, { Component } from 'react'
import Man from './man'
import AddForm from './components/addform'

export default class App extends Component {

  state = {
    manchester: [
      {name: "Cristiano Ronaldo", age: 36, position: "Winger", id: 1},
      {name: "Edinson Cavani", age: 34, position: "Striker", id: 2},
      {name: "Jadon Sancho", age: 21, position: "Winger", id: 3},
      {name: "Mason Greenwood", age: 19, position: "Winger", id: 4},
      {name: "Paul Pogba", age: 28, position: "Midfielder", id: 5},
      {name: "Bruno Fernandes", age: 27, position: "Midfielder", id: 6},
      {name: "Rafael Varane", age: 28, position: "Defender", id: 6},
      {name: "David De Gea", age: 31, position: "Goalkeeper", id: 6}
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
        <AddForm />
      </div>
    )
  }
}


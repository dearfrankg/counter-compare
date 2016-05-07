import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    };
  }

  increment = () => {
      this.setState({ counter: this.state.counter + 1 })
  }

  decrement = () => {
      this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <div>
        <h3>React Counter App</h3>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
        <br/>
        <br/>
        <div>Counter: {this.state.counter}</div>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter/>,
  document.getElementById('app')
)

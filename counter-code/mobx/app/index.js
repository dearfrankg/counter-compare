import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {observer} from "mobx-react"
import {observable} from 'mobx'

@observer
class CounterView extends Component {

  render() {
    let { counter } = this.props

    return (
      <div>
        <h3>Hello</h3>
        <button onClick={() => counter.decrement()}>-</button>
        <button onClick={() => counter.increment()}>+</button>
        <div>{counter.count}</div>
      </div>
    )
  }

}

class Counter {
  @observable count = 0

  decrement () {
    this.count--
  }

  increment () {
    this.count++
  }

}

const store = new Counter()

ReactDOM.render(
  <CounterView counter={store} />,
  document.getElementById('app')
)

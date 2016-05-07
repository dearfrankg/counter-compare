import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import Model from 'cerebral-model-baobab'
import Controller from 'cerebral'
import {Container} from 'cerebral-view-react'
import {Decorator as Cerebral} from 'cerebral-view-react'
import copy from 'cerebral-addons/copy'

////////////////////////////////////////////
// Components
const propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
}

@Cerebral({
  counter: ['counter']
})
class App extends Component {

  static propTypes = propTypes

  render () {
    const {counter} = this.props
    const {increment, decrement} = this.props.signals.counter
    return (
      <div>
        <button onClick={() => decrement()}>-</button>
        <button onClick={() => increment()}>+</button>
        <div>Counter: {counter}</div>
      </div>
    )
  }
}

////////////////////////////////////////////
// modules
const plusOne = (args, value) => value + 1
const minusOne = (args, value) => value - 1

const Counter = (options = {}) => {
  return (module) => {
    module.addState(0)
    module.addSignals({
      increment: [ copy('state:/counter', plusOne, 'state:/counter') ],
      decrement: [ copy('state:/counter', minusOne, 'state:/counter') ]
    })
  }
}

////////////////////////////////////////////
// main
const controller = Controller(Model({}))
controller.addModules({
  counter: Counter()
})

ReactDOM.render(
  <Container controller={controller} app={App} />,
  document.getElementById('app')
)

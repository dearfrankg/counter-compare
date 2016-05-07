import Rx from 'rx';
import Cycle from '@cycle/core';
import CycleDOM from '@cycle/dom';

const {div, button, p, h3, makeDOMDriver} = CycleDOM;

function main({DOM}) {
  const action$ = Rx.Observable.merge(
    DOM.select('.decrement').events('click').map(ev => -1),
    DOM.select('.increment').events('click').map(ev => +1)
  );
  const count$ = action$.startWith(0).scan((x,y) => x+y);
  return {
    DOM: count$.map(count =>
      div([
        h3('Cycle Counter App'),
        button('.decrement', 'Decrement'),
        button('.increment', 'Increment'),
        p(`Counter: ${count}`)
      ])
    )
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('#app')
});

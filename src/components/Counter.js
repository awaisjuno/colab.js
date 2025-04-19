import Component from '../core/Component';
import store from '../state/store';

class Counter extends Component {
  constructor() {
    super();
    this.state = store.getState();
    store.subscribe(this.updateState.bind(this));
  }

  updateState(newState) {
    this.setState(newState);
  }

  render() {
    this.element.innerHTML = `
      <h2>Counter: ${this.state.count}</h2>
      <button onclick="store.setState({ count: this.state.count + 1 })">Increment</button>
    `;
  }
}

export default Counter;
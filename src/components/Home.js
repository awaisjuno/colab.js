import Component from '../core/Component';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome to My Framework!',
    };
  }

  render() {
    this.element.innerHTML = `<h1>${this.state.message}</h1>`;
  }
}

export default Home;
class Component {
    constructor(props) {
      this.props = props || {};
      this.state = {};
      this.element = document.createElement('div');
    }
  
    setState(newState) {
      this.state = { ...this.state, ...newState };
      this.render();
    }
  
    render() {
      // Override this method in subclasses
    }
  
    mount(selector) {
      document.querySelector(selector).appendChild(this.element);
      this.render();
    }
  }
  
  export default Component;
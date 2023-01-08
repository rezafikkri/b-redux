import { Component } from "react";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    if (!this.textInput.value.trim()) return;

    this.props.addTodo(this.textInput.value);
    e.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={element => this.textInput = element}/>
        <button type="submit">Add todo</button>
      </form>
    );
  }
}

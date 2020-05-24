import React, { Component } from "react";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleChangeValue(e) {
    this.setState({
      value: e.target.value,
    });
  }
  handleClick() {
    if (!this.state.value) return;
    this.props.todo.add(this.state.value);
    this.setState({
      value: "",
    });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="输入Todo"
          value={this.state.value}
          onChange={this.handleChangeValue.bind(this)}
        ></input>
        <button onClick={this.handleClick.bind(this)}>提交</button>
      </div>
    );
  }
}
export default Add;

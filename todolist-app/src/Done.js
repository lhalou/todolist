import React, { Component } from "react";
class Done extends Component {
  constructor(props) {
    super(props);
  }
  handleDeleteItem(index) {
    if (this.props.todo.delete) {
      this.props.todo.delete(index);
    }
  }
  render() {
    return (
      <div>
        <h2>已经完成</h2>
        <ul>
          {this.props.todo.list.map((item, index) => {
            return (
              item.status && (
                <li key={index}>
                  <input
                    type="checkbox"
                    value={item.text}
                    name="name"
                    checked={this.props.todo.status}
                  />
                  {item.text}
                  <button onClick={this.handleDeleteItem.bind(this, index)}>
                    删除
                  </button>
                </li>
              )
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Done;

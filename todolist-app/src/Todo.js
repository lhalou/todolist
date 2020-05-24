//ToDo组件的重点是判断并修改时间的status属性
import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  handleDoneClick(index) {
    if (
      this.props.todo.list[index].status === false &&
      this.props.todo.list[index].id
    ) {
      this.props.todo.finish(this.props.todo.list[index].id);
    }
  }
  handleDeleteItem(index) {
    if (this.props.todo.delete) {
      this.props.todo.delete(index);
    }
  }
  render() {
    return (
      <div>
        <h2>待完成事件</h2>
        <ul>
          {this.props.todo.list.map((item, index) => {
            return (
              !item.status && (
                <li key={index}>
                  <input
                    type="checkbox"
                    value={item.text}
                    name="name"
                    checked={this.props.todo.status}
                    onClick={this.handleDoneClick.bind(this, index)}
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
export default Todo;

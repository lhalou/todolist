import React, { Component } from "react";
import Add from "./Add.js";
import Todo from "./Todo.js";
import Done from "./Done.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        list: [],
        add: (item) => {
          this.setState((preState) => {
            let newTodo = preState.todo;
            let list = Object.assign([], newTodo.list);
            list.push({
              text: item,
              id: new Date().getTime(),
              status: false, //false表示未完成状态
            });
            newTodo.list = list;
            return {
              todo: newTodo,
            };
          });
        },
        finish: (id) => {
          this.setState((preState) => {
            let newTodo = preState.todo;
            let list = newTodo.list.map((item) => {
              if (item.id === id) {
                item.status = true;
              }
              return item;
            });
            newTodo.list = list;
            return {
              todo: newTodo,
            };
          });
        },
        delete: (index) => {
          console.log("delete");
          this.setState((preState) => {
            let newTodo = preState.todo;
            let list = [
              ...newTodo.list.slice(0, index),
              ...newTodo.list.slice(index + 1),
            ];
            newTodo.list = list;
            return {
              todo: newTodo,
            };
          });
        },
      },
    };
  }
  render() {
    return (
      <div>
        <Add todo={this.state.todo} />
        <Todo todo={this.state.todo} status={false} />
        <Done todo={this.state.todo} status={true} />
      </div>
    );
  }
}
export default App;

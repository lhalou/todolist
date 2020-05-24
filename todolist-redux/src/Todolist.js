import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store/index.js";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
} from "./store/actionCreator.js";
class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleDeleteItem(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Input
          value={this.state.inputValue}
          placeholder="请输入todo"
          style={{ width: "300px", marginRight: "10px" }}
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleBtnClick}>
          提交
        </Button>
        <List
          style={{ width: "300px", marginTop: "10px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleDeleteItem.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
export default Todolist;

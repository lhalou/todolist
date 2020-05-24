import React, { Component } from "react";
import { connect } from "react-redux";
const TodoList = (props) => {
  const {
    inputValue,
    list,
    changeInputValue,
    handleBtnClick,
    handleDeleteItem,
  } = props;
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="请输入todo"
          value={inputValue}
          onChange={changeInputValue}
        />
        <button onClick={handleBtnClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index} onClick={handleDeleteItem}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value,
      };
      dispatch(action);
    },
    handleBtnClick() {
      const action = {
        type: "add_item",
      };
      dispatch(action);
    },
    handleDeleteItem(index) {
      const action = {
        type: "delete_item",
        index: index,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

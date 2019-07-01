import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";

import * as TodoActions from "../actions/TodoActions";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAll()
    };
  }

  componentDidMount() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll()
      });
    });
  }

  createTodo() {
    TodoActions.createTodo("Asap asap");
  }

  // reloadTodos() {
  //   TodoActions.reloadTodos();
  // }

  render() {
    const { todos } = this.state;
    console.log(todos)


    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>   
        <button onClick={this.createTodo.bind(this)}>追加する</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}


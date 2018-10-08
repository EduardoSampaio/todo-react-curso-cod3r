import React, { Component } from "react";
import axios from 'axios';

import Pageheader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = "http://localhost:3003/api/todos";



export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = { description: '', list: [] }
  }

  handleChange(e) {
   this.setState({...this.state, description: e.target.value })
  }

  handleAdd() {
      const description = this.state.description;

      axios.post(URL,{description:description})
      .then(resp => console.log('Funcionou'))

    console.log(this);
  }

  render() {
    return (
      <div>
        <Pageheader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={this.state.description}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}       
        />
        <TodoList />
      </div>
    );
  }
}

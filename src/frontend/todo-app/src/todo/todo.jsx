import React, { Component } from 'react'
import Pageheader from '../template/pageHeader';

export default class Todo extends Component {

    render(){
        return(
            <div>
                <Pageheader name="Tarefas" small="Cadastro"/>
            </div>
        )
    }
}
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropType from 'prop-types';

class Todos extends Component{


   render(){ 
      return this.props.todos.map((todo)=>(
     <TodoItem key={todo.id} todo ={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
     
     ));

   }
}


//Prop Types
Todos.PropType={
   todos:PropType.array.isRequired
}
export default Todos;
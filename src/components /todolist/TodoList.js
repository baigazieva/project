

import  React, {Component} from 'react'
import './todolist.css'

class  TodoList extends Component{
    constructor(){
      super()
      this.state={
        input: '',
          todo: [],
          doneTodo: []
      }
    }

    onKeyUp =(e)=>{
      this.setState({input: e.target.value})
      
      
    }

    onClick =()=>{
      const newTodo = [...this.state.todo]
      newTodo.push(this.state.input)
      this.setState({todo:newTodo})
      this.setState({input: ''})
    }

    onDelete =(id) =>{
      const {todo} = this.state
      if(id >= 1){
  todo.slice(id,1)
     this.setState({todo})
      }
    }
    

    render(){

        const {todo, input,doneTodo } = this.state
      return(
        <div className="container">
          <h3>To do List</h3>
          <div className="onkeyUp">
            <input onChange={this.onKeyUp} placeholder="enter task" value={input}></input>
            <button onClick={this.onClick} >Click</button>
            </div>
            <div className="todolist">
              <ul>
                {
                  todo.map((item,id)=>{
                    return  (
                      <li key={id}><input type="checkbox"/>
                      {item}
                      {/* <span onClick={()=> this.onDelete(id)} className="delete">X</span> */}
                      </li> 
                    )
                     
                  })

                  }
              </ul>
              <div className="clear" >Clear</div>
            </div>
            
        </div>
      )
    }
}
export default TodoList
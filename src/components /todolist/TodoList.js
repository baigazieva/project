

import  React, {Component} from 'react'
import './todolist.css'

class  TodoList extends Component{
    constructor(){
      super()
      this.state={
        input: '',
          todo: [],
        
      }
    }

    onKeyUp =(e)=>{
      this.setState({input: e.target.value})
      
      
    }

    onClick =()=>{
      const input = this.state.input
      // const newTodo = [...this.state.todo] // ? 
      const newTodo = this.state.todo
 
      const task = {
        name: input,
        done: false
      }
      newTodo.push(task)
      this.setState({todo:newTodo})
      this.setState({input:""})
      
      

    }
    onDelete =(id) =>{
      const {todo} = this.state
       todo.splice(id,1)
      this.setState({todo:todo})  
    }

    onDone =(id) =>{

      console.log( 'aidia', this.state.todo[id])
      const {todo } = this.state
      todo[id].done = !todo[id].done 
     this.setState({todo: todo})
      
    }
    onClear =()=>{
        const {input} = this.state
        this.setState({todo:[]})
      
    }
    
    

    render(){
          // pass data will mk cp
        const {todo, input,doneTodo } = this.state
       
       
      return(
        <div className="container">
          <h3>To do List</h3>
          <div className="onkeyUp">
            <input onChange={this.onKeyUp}  placeholder="enter task" value={this.state.input}></input>
            <button disabled={!this.state.input} onClick={this.onClick}>Click</button>
            </div>
            <div className="todolist">
              <ul>
                {
                  todo.map((item,id)=>{
                    console.log("omg", todo[id])
                    let linethrough = todo[id].done ? 'cross' : ''; // ?
                    console.log("linethrough", linethrough)
                    return  (
                      <li  className={linethrough} key={id}> 
                      <input  onClick={()=> this.onDone(id)}  type="checkbox"/>
                       {item.name}
                      {/* uncommented comment just for the ref */}
                      <span onClick={()=> this.onDelete(id)} className="delete">X</span>
                      </li> 
                    )
                     
                  })
                  }
              </ul>
              <button onClick={this.onClear}   className="clear" >Clear</button>
            </div>
            
        </div>
      )
    }
}
export default TodoList


import  React, {Component} from 'react'
import './todolist.css'

class  TodoList extends Component{
    constructor(){
      super()
      this.state={
        input: '',
          todo: []
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
       console.log('aidai',this.state.todo)

    }
    clear = () => {
      this.setState({todo:[]})
    }

    render(){
        const {todo, input } = this.state
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
                      <span className="delete">X</span>
                      </li> 
                    )
                     
                  })

                  }
              </ul>
              <div className="clear" onClick={this.clear}>Clear</div>
            </div>
            
        </div>
      )
    }
}
export default TodoList
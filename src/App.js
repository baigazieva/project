

import  React, {Component} from 'react'
import TodoList from './components /todolist/TodoList';
// import Input from './components /input/Input'

class  App extends Component{
    constructor(){
      super()
      this.setState={

      }
    }
    render(){
      return(
        <div>
        <TodoList/>
        
        </div>
      )
    }
}

export default App;

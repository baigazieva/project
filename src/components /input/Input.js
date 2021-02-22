




class Input  extends Component{
    constructor(){
        super()
        this.state ={
        
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
        this.setState({input: ''})


        }
            render(){
                return(
                    <div className="onkeyUp">
                    <input onChange={this.onKeyUp}  placeholder="enter task" ></input>
                    <button onClick={this.onClick} >Click</button>
                    </div>
                )
            }
        }

export default Input
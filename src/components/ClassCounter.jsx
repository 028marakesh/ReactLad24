import React from "react";


//КЛАССОВЫЙ КОМПОНЕНТ (УСТАРЕВШЕЕ НО МОЖЕТ ВСТРЕТИТЬСЯ)
class ClassCounter extends React.Component {

    //создаем состояние в классе
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }

    increment(){
        this.setState({count: this.state.count +1})
      }
    
    decrement(){
        this.setState({count: this.state.count -1})
      }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>

            </div>
        )
    }
}

export default ClassCounter;
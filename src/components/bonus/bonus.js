import { Component } from 'react';
import "./bonus.css"


class Bonus extends Component{
    constructor(props){
        super(props)
        this.state = {
            bonus:true
        }
    }
render(){
return(
    <div className="app-info">
        <button
        className={`btn btn-light`}
        type = "button"
        onClick ={this.props.handleClick}>Бонус кліп</button>
        
    </div>
)
}
}

export default Bonus
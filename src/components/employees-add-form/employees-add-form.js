import './employees-add-form.css';
import {Component} from 'react'

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            name:"",
            salary: ''

        }
    }
    onValueChange = (e) =>{
        this.setState({
           [e.target.name]:e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }
    render(){
        
        const{name,salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Додайте нового робітника</h3>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        required
                        placeholder="Як його звати?"
                        onChange={this.onValueChange}
                        name= "name"
                        value={name} />
                    <input type="number"
                        className="form-control new-post-label"
                        required
                        placeholder="З/П в $?"
                        onChange={this.onValueChange}
                        name= "salary"
                        value={salary} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Додати</button>
                </form>
            </div>
        )
        }
}

export default EmployeesAddForm;
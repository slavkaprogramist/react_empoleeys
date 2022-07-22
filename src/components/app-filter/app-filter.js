import "./app-filter.css"
import { Component } from 'react';

class AppFilter extends Component{


    render(){
        const buttonsData =[
            {name: 'all', label: 'Усі робітники'},
            {name: 'rise', label: 'На покращення'},
            {name: 'moreThen1000', label: 'З/П більше 1000%'}
        ]
        const buttons = buttonsData.map(({name, label}) => {
            const active = this.props.filter === name
            const clazz = active? 'btn-light' : 'btn-outline-light'
            return(
                <button 
                className={`btn ${clazz}`}
                type = "button"
                key ={name}
                onClick ={() => this.props.onFilterSelect(name)} >
                    
                {label}
                </button>
            )
        })
        
        return(
            <>
            <div className="btn-group">
                {buttons}       
            </div>
        
            </>
        )
    }
    }

export default AppFilter
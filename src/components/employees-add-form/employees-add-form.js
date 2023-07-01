import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {onAdd} = this.props;
        const {name, salary} = this.state;
        
        return (
            <div className="app-add-form">
                <h3>Добавте нового співробітника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => {
                        if(name && salary) {
                            onAdd(e, name, salary); this.setState({name: '', salary: ''})
                        } else {e.preventDefault()}}}>
                    <input type="text"
                        name="name"
                        className="form-control new-post-label"
                        placeholder="Як його звати?"
                        onChange={this.onValueChange}
                        value={name}/>
                    <input type="number"
                        name="salary"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        onChange={this.onValueChange}
                        value={salary}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавити</button>
                </form>
            </div>
        );
    }
    
}

export default EmployeesAddForm;
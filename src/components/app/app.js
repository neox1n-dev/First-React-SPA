import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                    {name: 'John C.', salary: 800, increase: false, like: false, id: 1},
                    {name: 'Alex M.', salary: 3000, increase: false, like: false, id: 2},
                    {name: 'Carl W.', salary: 5000, increase: false, like: false, id: 3}
            ],
            maxIndex: 4,
            term: '',
            filter: 'all'
        }
    }
    
    onDelete = (id) => {
        this.setState((state) => ({
            data: state.data.filter(item => item.id !== id),
        }))
    }

    onAdd = (e, name, salary) => {
        e.preventDefault();
        const newArr = [...this.state.data, {name: name, salary: salary, increase: false, like: false, id: this.state.maxIndex}]
        this.setState((state) => ({
            data: newArr,
            maxIndex: state.maxIndex + 1
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState((state) => ({
            data: state.data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(this.state.data, term), filter);
        return (
            <div className="app">
                <AppInfo allCount={this.state.data.length} increaseCount={this.state.data.filter(item => item.increase).length}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList data={visibleData} onDelete={this.onDelete} onToggleProp={this.onToggleProp}/>
    
                <EmployeesAddForm onAdd={this.onAdd}/>
            </div>
        );
    }
    
}

export default App;
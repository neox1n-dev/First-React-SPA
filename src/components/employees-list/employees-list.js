import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map((item) => {
        return (
            <EmployeesListItem
            name={item.name}
            salary={item.salary}
            increase={item.increase}
            like={item.like}
            key={item.id}
            onDelete={() => onDelete(item.id)}
            onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}/>
        );
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;
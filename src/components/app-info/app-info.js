import './app-info.css';

const AppInfo = ({allCount, increaseCount}) => {
    return (
        <div className="app-info">
            <h1>Облік працівників в компанії N</h1>
            <h2>Загальна кількість працівників: {allCount}</h2>
            <h2>Премію получать: {increaseCount}</h2>
        </div>
    );
}

export default AppInfo;
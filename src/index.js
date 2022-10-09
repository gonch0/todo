import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppHeader} from "./components/AppHeader";
import {Search} from "./components/Search";
import {TodoList} from "./components/TodoList";


const App = () => {

    const todoData = [
        {label: 'Todo1', important: false, id: 1},
        {label: 'Todo2', important: true, id: 2},
        {label: 'Todo3', important: false, id: 3},
    ]

    return (
        <div className='container'>
            <AppHeader/>
            <Search/>
            <TodoList todoData={todoData}/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<App/>)
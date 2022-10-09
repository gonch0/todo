import React from "react";
import {TodoListItem} from "./TodoListItem";

export const TodoList = ({todoData}) => {

    return <ul className='list-group todo-list'>
        {todoData.map(({id, ...itemProps}) =>
            <TodoListItem
                key={id}
                {...itemProps}
            />
        )}
    </ul>
}
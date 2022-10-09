import React from "react";
import classNames from "classnames";

export const TodoListItem = ({label, important}) => {
    return (
        <li className={classNames('list-group-item d-flex', {danger: important})}>
            <span className='mr-auto'>
                label
            </span>

            <button
                className='btn btn-primary delete'
            >
                delete
            </button>
            <button
                className='btn btn-secondary delete'
            >
                make important
            </button>
        </li>
    )
}
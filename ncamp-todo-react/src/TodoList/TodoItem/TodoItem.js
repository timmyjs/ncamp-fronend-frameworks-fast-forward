import React from 'react';

import './TodoItem.css';

const TodoItem = ({ todo, onClickItem}) => {
    return (
        <li onClick={() => onClickItem(todo)}>
            <p>{todo}</p>
        </li>
    );
};

export default TodoItem;
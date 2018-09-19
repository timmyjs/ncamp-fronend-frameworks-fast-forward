import React from 'react';

import TodoItem from './TodoItem/TodoItem';

const TodoList = (props) => {
    const items = props.todos.map((todo, i) => (
        <TodoItem todo={todo} onClickItem={props.onClickTodo} key={i}/>
    ));

    return (
        <div>
            <input onChange={props.onChangeInput} />
            <button onClick={props.onClickButton}>
                Add Todo
            </button>
            <ul>{items}</ul>
        </div>
    );
};

export default TodoList;
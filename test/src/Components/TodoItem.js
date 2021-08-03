import React from 'react';

function TodoItem(props) {
    const completedStyle={
        color: '#cdcdcd',
        fontStyle: 'italic',
        textDecoration: 'line-through'
    }
    return (
        <div className='todoItem'>
            <input type='checkbox' checked={props.todo.completed} onChange={() => props.handleChange(props.todo.id)}/>
            {<p style={props.todo.completed?completedStyle:null}>{props.todo.text}</p>}
            </div>
    );
}
export default TodoItem;
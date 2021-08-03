import React from 'react'

function TodoItem({todo,theme}) {

    const completedStyle={
        color: '#cdcdcd',
        fontStyle: 'italic',
        textDecoration: 'line-through'
    }

    const lightTheme = {
        backgroundColor: '#cdcdcd',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        borderBottom: '2px solid black',
      };

    return (
        <div className='todoItem' style={theme?null:lightTheme}>
            <input type='checkbox' checked={todo.completed} />
            <p style={todo.completed?completedStyle:null}>{todo.text}</p>
        </div>
    )
}

export default TodoItem;
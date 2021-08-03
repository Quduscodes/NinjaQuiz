import React from 'react'

function TodoCounter({count}) {
    return (
        <div className='todoCounter'>
            <h3>Today's Todos - {count} Todos</h3>
        </div>
    )
}

export default TodoCounter;
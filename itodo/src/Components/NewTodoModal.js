import React from 'react'
import custTodos from '../App';

function NewTodoModal({show, onClick}) {

    if (show===false){
        return null;
    }
    return (
        <div className='todoModal' onClick={onClick}>
            <div className='modalContent' onClick={(e)=>{e.stopPropagation()}}>
                <div className='modalHeader'>
                    <h4 className='modalTitle'>Add New Todo</h4>
                </div>
                <div className='modalBody'>
                    <textarea
                    cols='40'
                    rows='8'
                    placeholder='Enter to-do...'

                    />
                </div>
                <div className='modalFooter'>
                    <button className='button' onClick={onClick}>Add Todo(s)</button>
                </div>
            </div>
        </div>
    )
}

export default NewTodoModal;

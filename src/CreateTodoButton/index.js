import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css'

const CreateTodoButton = () => {
    
    const { setOpenModal, openModal } = React.useContext(TodoContext);

    return (
        <button className="CreateTodoButton" onClick={() => { 
            // Si el open modal esta abierto lo cierra, si esta cerrado lo abre. 
            setOpenModal(!openModal)
        }}> + </button>
    );
}

export {CreateTodoButton}
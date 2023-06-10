import React from "react";
import {TodoIcon} from "."

const DeleteIcon = ({onDelete}) => {
        return (
        <TodoIcon 
            type="delete"
            color="gray"
            onClick={onDelete}
        />
    )
}

export { DeleteIcon }
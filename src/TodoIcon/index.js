import React from "react";

import { ReactComponent as CheckSVG} from "../assets/circle-check.svg";
import { ReactComponent as DeleteSVG} from "../assets/x-red.svg";

import  "./TodoIcon.css";

const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>
}

const TodoIcon = ( { type, color, onClick } ) => {
    return(
        <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>                        
            {iconTypes[type](color)}
        </span>
    )
}

export {TodoIcon}
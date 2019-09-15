import React from "react";
import { faPaste } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PasteButton = props => {
    return (
        <button {...props} className="btn btn-secondary">
            <FontAwesomeIcon icon={faPaste} />
            <span> Paste</span>
        </button>
    );
};

export default PasteButton;

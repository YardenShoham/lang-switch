import React from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CopyButton = props => {
    return (
        <button {...props} className="btn btn-secondary float-right">
            <FontAwesomeIcon icon={faCopy} />
            <span> Copy</span>
        </button>
    );
};

export default CopyButton;

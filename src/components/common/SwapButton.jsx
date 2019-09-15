import React from "react";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SwapButton = props => {
    return (
        <button {...props} className="btn btn-primary btn-lg btn-block">
            <FontAwesomeIcon icon={faExchangeAlt} />
        </button>
    );
};

export default SwapButton;

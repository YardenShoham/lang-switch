import React from "react";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * A button with a swap icon.
 *
 * @param {Object} props Props for a button.
 * @returns {ReactComponent} The swap button.
 */
const SwapButton = ({ className: classes, ...props }) => {
    return (
        <button
            {...props}
            aria-label="Swap Button"
            className={`btn btn-primary btn-lg btn-block${
                classes === undefined ? "" : ` ${classes}`
            }`}
        >
            <FontAwesomeIcon icon={faExchangeAlt} />
        </button>
    );
};

export default SwapButton;

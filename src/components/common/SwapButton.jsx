import React from "react";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

/**
 * A button with a swap icon.
 *
 * @param {Object} props Props for a button.
 * @returns {ReactComponent} The swap button.
 */
const SwapButton = props => {
    return (
        <Button
            {...props}
            aria-label="Swap Button"
            baseClasses="btn btn-primary btn-lg btn-block"
            icon={faExchangeAlt}
        />
    );
};

export default SwapButton;

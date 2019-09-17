import React from "react";
import { faPaste } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * A button with a paste icon and a "Paste" text.
 *
 * @param {Object} props Props for a button.
 * @returns {ReactComponent} The paste button.
 */
const PasteButton = ({ className: classes, ...props }) => {
    return (
        <button
            {...props}
            className={`btn btn-secondary${
                classes === undefined ? "" : ` ${classes}`
            }`}
        >
            <FontAwesomeIcon icon={faPaste} />
            <span> Paste</span>
        </button>
    );
};

export default PasteButton;

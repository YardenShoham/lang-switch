import React from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * A button with a copy icon and a "Copy" text.
 *
 * @param {Object} props Props for a button.
 * @returns {ReactComponent} The copy button.
 */
const CopyButton = ({ className: classes, ...props }) => {
    return (
        <button
            {...props}
            className={`btn btn-secondary float-right ${
                classes === undefined ? "" : classes
            }`}
        >
            <FontAwesomeIcon icon={faCopy} />
            <span> Copy</span>
        </button>
    );
};

export default CopyButton;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * A button with an icon and a text.
 *
 * @param {Object} props Props for a button.
 * @returns {ReactComponent} The actual button.
 */
const ClipboardButton = ({ baseClasses, label, icon, ...props }) => {
    return (
        <button
            {...props}
            className={
                baseClasses +
                (props.className === undefined ? "" : ` ${props.className}`)
            }
        >
            <FontAwesomeIcon icon={icon} />
            <span> {label}</span>
        </button>
    );
};

export default ClipboardButton;

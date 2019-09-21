import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * A button with an icon and an optional label.
 *
 * @param {Object} props Props for a button.
 * @returns {ReactComponent} The actual button.
 */
const Button = ({ baseClasses, label, icon, ...props }) => {
    return (
        <button
            {...props}
            className={
                baseClasses +
                (props.className === undefined ? "" : ` ${props.className}`)
            }
        >
            <FontAwesomeIcon icon={icon} />
            {label && <span> {label}</span>}
        </button>
    );
};

export default Button;

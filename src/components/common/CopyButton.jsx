import React from "react";
import ClipboardButton from "./ClipboardButton";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

/**
 * A button with a copy icon and a "Copy" text.
 *
 * @param {Object} props Props for a button.
 * @returns {ReactComponent} The copy button.
 */
const CopyButton = props => {
    return (
        <ClipboardButton
            {...props}
            baseClasses="btn btn-secondary float-right"
            label="Copy"
            icon={faCopy}
        />
    );
};

export default CopyButton;

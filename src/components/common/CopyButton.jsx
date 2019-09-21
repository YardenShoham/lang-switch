import React from "react";
import Button from "./Button";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

/**
 * A button with a copy icon and a "Copy" text.
 *
 * @param {Object} props Props for a button.
 * @returns {ReactComponent} The copy button.
 */
const CopyButton = props => {
    return (
        <Button
            {...props}
            baseClasses="btn btn-secondary float-right"
            label="Copy"
            icon={faCopy}
        />
    );
};

export default CopyButton;
